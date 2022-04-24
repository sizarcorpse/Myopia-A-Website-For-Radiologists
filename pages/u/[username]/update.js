import Head from "next/head";
import { Grid } from "@mui/material";
import { getSession } from "next-auth/react";
import { ProfileSurface } from "components/surface";
import { UpdateUserForm } from "components/form";
import useSWR from "swr";
const UpdateProfile = (props) => {
  const { isOwner, initialData } = props;

  const { data, error, mutate } = useSWR(
    `/api/user/${initialData.username}`,

    { fallbackData: initialData }
  );

  const updateForm = {
    name: data.name,
    username: data.username,
    email: data.email,
    image: data.image,
    bio: data.bio,
    occupation: data.occupation,
    location: data.location,
    website: data.website,
  };

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Update</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item xs={12}>
        <ProfileSurface uInfo={data} isOwner={isOwner}>
          <UpdateUserForm updateForm={updateForm} mutate={mutate} />
        </ProfileSurface>
      </Grid>
    </Grid>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const {
    query: { username },
  } = ctx;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  if (session && session.user.username !== username) {
    return {
      redirect: {
        destination: `/u/${session.user.username}`,
      },
    };
  }

  if (session && session.user.username === username) {
    const r = await fetch(`${process.env.NEXT_API_URL}/user/${username}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        cookie: req.headers.cookie,
      },
    });
    const initialData = await r.json();
    return {
      props: {
        isOwner: true,
        initialData,
      },
    };
  }
};
export default UpdateProfile;
