import { useState } from "react";
import { Box, styled, Grid } from "@mui/material";
import { getSession } from "next-auth/react";
import { DashboardSurface } from "components/surface";
import useSWR from "swr";
import {
  CategoriesHeader,
  CategoriesSidebarRecent,
} from "components/dashboard/categories";
import { NewCategoryForm } from "components/form";

const NewCategory = (props) => {
  const { session, recentCategories } = props;
  const [createdCategory, setCreatedCategory] = useState();

  const {
    data: categories,
    error,
    mutate: mutateRecentCategories,
  } = useSWR(`/api/category`, {
    fallbackData: recentCategories,
  });

  const categoryForm = {
    name: "",
    slug: "",
    cover: {
      url: "",
      public_id: "",
    },
    description: "",
    cover: "",
  };

  return (
    <DashboardSurface session={session}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CategoriesHeader
            mode="create"
            title={
              createdCategory ? createdCategory.category.name : "New Category"
            }
            status={createdCategory && createdCategory.category.status}
            catId={createdCategory && createdCategory.category._id}
          />
        </Grid>
        <Grid item xs={6}>
          <NewCategoryForm
            mutateRecentCategories={mutateRecentCategories}
            categoryForm={categoryForm}
            setCreatedCategory={setCreatedCategory}
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
  const recentCategories = await r.json();

  return {
    props: {
      session,
      recentCategories,
    },
  };
};

export default NewCategory;
