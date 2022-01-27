import Head from "next/head";
import { Grid, Container, styled } from "@mui/material";

import { HomeHero, HomeIntroduction } from "components/section/home/";
import { mockHome } from "mocks/";
const Home = () => {
  const { hero, introduction } = mockHome;
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <HomeHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <HomeIntroduction data={introduction} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
