import { Grid } from "@mui/material";
import { getSession } from "next-auth/react";
import { DashboardSurface } from "components/surface";
import {
  CategoriesHeader,
  CategoriesSidebarRecent,
} from "components/dashboard/categories";
import { NewCategoryForm } from "components/form";
import useSWR from "swr";

const UpdateCategory = (props) => {
  const { session, initialData, recentCategories } = props;

  const {
    data: category,
    error,
    mutate: mutateUpdatedCategory,
  } = useSWR(`/api/category/${initialData._id}`, {
    fallbackData: initialData,
  });

  const {
    data: categories,
    error: rcError,
    mutate: mutateRecentCategories,
  } = useSWR(`/api/category`, {
    fallbackData: recentCategories,
  });

  const categoryForm = {
    id: category._id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    cover: category.cover,
  };

  return (
    <DashboardSurface session={session}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CategoriesHeader
            mode="edit"
            title={category.name}
            status={category.status}
            catId={category._id}
          />
        </Grid>
        <Grid item xs={6}>
          <NewCategoryForm
            isNewCategory={false}
            categoryForm={categoryForm}
            mutateUpdatedCategory={mutateUpdatedCategory}
          />
        </Grid>
        <Grid item xs={6}>
          <CategoriesSidebarRecent recentCategories={categories} />
        </Grid>
      </Grid>
    </DashboardSurface>
  );
};

export const getServerSideProps = async (ctx) => {
  const {
    req,
    res,
    query: { categoryId },
  } = ctx;
  const session = await getSession({ ctx });
  if (!session || session.user.role != "admin") {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  const r = await fetch(`${process.env.NEXT_API_URL}/category/${categoryId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      cookie: req.headers.cookie,
    },
  });

  const initialData = await r.json();

  const rc = await fetch(`${process.env.NEXT_API_URL}/category`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const recentCategories = await rc.json();

  return {
    props: {
      session,
      initialData,
      recentCategories,
    },
  };
};

export default UpdateCategory;
