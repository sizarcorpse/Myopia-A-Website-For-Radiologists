import Head from "next/head";
import { Grid, Container, styled } from "@mui/material";

import {
  HomeHero,
  HomeIntroduction,
  HomeServices,
  HomeOurTechnology,
  HomeLearnMore,
} from "components/section/home/";
import { mockHome } from "mocks/";
const Home = () => {
  const { hero, introduction, services, technology, learn } = mockHome;
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
      <Grid item xs={12} sx={{ backgroundColor: "primary.light" }}>
        <Container maxWidth="lg">
          <HomeOurTechnology data={technology} />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <HomeServices data={services} />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <HomeLearnMore data={learn} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
