import Head from "next/head";
import { Grid, Container, styled } from "@mui/material";

import { HomeHero, HomeIntroduction } from "components/section/home/";
import { mockHome } from "mocks/";
const Home = () => {
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <HomeHero data={mockHome.hero} />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <HomeIntroduction />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
