import Head from "next/head";
import { Grid, Container, styled } from "@mui/material";

import { HomeHero } from "components/section/home/";

const Home = () => {
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <HomeHero />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
