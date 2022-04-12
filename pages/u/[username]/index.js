import Head from "next/head";
import { ProfileSurface } from "components/surface";
import { Grid } from "@mui/material";
import { getSession } from "next-auth/react";
const UserProfile = (props) => {
  const { isOwner, userInformation } = props;
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Update</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileSurface uInfo={userInformation}>User Tab</ProfileSurface>
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
      props: {
        isOwner: false,
      },
    };
  }

  if (session && session.user.username === username) {
    const r = await fetch(`http://localhost:3000/api/user/${username}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        cookie: req.headers.cookie,
      },
    });
    const userInformation = await r.json();
    return {
      props: {
        isOwner: true,
        userInformation,
      },
    };
  }
};
export default UserProfile;
