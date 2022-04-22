import Link from "next/link";
import { Box, styled, Grid, Typography, Button } from "@mui/material";
import { getSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { DashboardSurface } from "components/surface";
import { CategoriesHeader } from "components/dashboard/categories";
import useSWR from "swr";

const Categories = (props) => {
  const { session, initialData } = props;
  const { enqueueSnackbar } = useSnackbar();

  const {
    data: categories,
    error,
    mutate: mutateCategories,
  } = useSWR(`/api/category`, {
    fallbackData: initialData,
  });

  const handleCategoryDelete = async (id) => {
    try {
      mutateCategories(
        categories.filter((c) => c._id != id),
        false
      );

      const r = await fetch(`/api/category/${id}`, {
        method: "DELETE",
      });
      const rd = await r.json();

      if (rd.status === "success") {
        mutateCategories();
        enqueueSnackbar("Category deleted successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category deleted failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Category deleted failed", { variant: "error" });
    }
  };

  return (
    <DashboardSurface session={session}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CategoriesHeader
            title="Category"
            mode="home"
            handleCategoryDelete={handleCategoryDelete}
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {categories.map((category, index) => (
              <Box
                className="c-card"
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "100%",
                  maxWidth: "300px",
                  backgroundColor: "lightgreen",
                  p: 2,

                  backgroundImage: `url(${
                    (category.cover && category.cover.url) || undefined
                  })`,
                }}
              >
                <Typography variant="h7">{category.name}</Typography>
                <Typography variant="h7">{category.slug}</Typography>
                <Typography variant="h7">{category._id}</Typography>
                <Link href={`/dashboard/categories/${category._id}`}>
                  <Button>Edit</Button>
                </Link>

                <Button onClick={() => handleCategoryDelete(category._id)}>
                  Delete
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </DashboardSurface>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req } = ctx;
  const session = await getSession({ ctx });

  if (!session || session.user.role != "admin") {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const r = await fetch(`${process.env.NEXT_API_URL}/category`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const initialData = await r.json();

  return {
    props: {
      session,
      initialData,
    },
  };
};

export default Categories;
