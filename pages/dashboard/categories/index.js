import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { getSession } from "next-auth/react";
import { DashboardSurface } from "components/surface";
import { CategoriesHeader } from "components/dashboard/categories";
import { MPFilter, MPFilterItem, MPCategoryCard } from "components/ui";
import useSWR from "swr";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import SortIcon from "@mui/icons-material/Sort";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterListIcon from "@mui/icons-material/FilterList";

const limitItems = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
];

const sortByItems = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "status",
    label: "Status",
  },
  {
    value: "createdAt",
    label: "Created At",
  },
  {
    value: "updatedAt",
    label: "Updated At",
  },
];
const sortItems = [
  {
    value: "asc",
    label: "Ascending",
  },
  {
    value: "desc",
    label: "Descending",
  },
];
const statusItems = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "published",
    label: "Published",
  },
  {
    value: "draft",
    label: "Draft",
  },
];

const Categories = (props) => {
  const { session, initialData } = props;
  const [page, setPage] = useState(parseInt(1));
  const [limit, setLimit] = useState(5);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sort, setSort] = useState("desc");
  const [status, setStatus] = useState("all");

  const {
    data: categories,
    error,
    mutate: mutateCategories,
  } = useSWR(
    `/api/category?sortBy=${sortBy}&sort=${sort}&limit=${limit}&page=${page}${
      status ? `&status=${status}` : ""
    }`,
    {
      revalidateOnFocus: false,
      fallbackData: initialData,
    }
  );

  return (
    <DashboardSurface session={session}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CategoriesHeader title="Category" mode="home" />
          <MPFilter>
            <MPFilterItem
              name="limit"
              label="Limit"
              items={limitItems}
              icon={<FilterNoneIcon />}
              filter={limit}
              setFilter={setLimit}
            />
            <MPFilterItem
              name="sort-by"
              label="Sort By"
              items={sortByItems}
              icon={<SortIcon />}
              filter={sortBy}
              setFilter={setSortBy}
            />
            <MPFilterItem
              name="sort"
              label="Sort"
              items={sortItems}
              icon={<SwapVertIcon />}
              filter={sort}
              setFilter={setSort}
            />
            <MPFilterItem
              name="status"
              label="Status"
              items={statusItems}
              icon={<FilterListIcon />}
              filter={status}
              setFilter={setStatus}
            />
          </MPFilter>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            {categories.map((category, index) => (
              <MPCategoryCard
                item={category}
                key={index}
                mutateCategories={mutateCategories}
                dataWillMutate={categories}
              />
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

  const sortBy = "createdAt";
  const limit = 5;
  const sort = "desc";

  if (!session || session.user.role != "admin") {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const r = await fetch(
    `${
      process.env.NEXT_API_URL
    }/category?sortBy=${sortBy}&sort=${sort}&limit=${limit}&page=${1}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const initialData = await r.json();

  return {
    props: {
      session,
      initialData,
    },
  };
};

export default Categories;
