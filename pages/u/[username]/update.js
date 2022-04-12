import Head from "next/head";
import { Grid, Container, Typography } from "@mui/material";
import { getSession } from "next-auth/react";
const UpdateProfile = (props) => {
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Update</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1">
            Update
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

// export async function getServerSideProps(ctx) {
//   const { req, res } = ctx;
//   const {
//     query: { username },
//   } = req;
//   const session = await getSession({ req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }

//   return {
//     props: {
//       session: null,
//       providers: providers,
//     },
//   };
// }
export default UpdateProfile;
