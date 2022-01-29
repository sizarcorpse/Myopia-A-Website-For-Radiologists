import Head from "next/head";
import { Box, Grid, Container } from "@mui/material";
import { ServicesHero, ServicesAllService } from "components/section/service/";
import { mockServices } from "mocks/";
const services = () => {
  const { hero, services } = mockServices;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : About</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <ServicesHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <ServicesAllService data={services} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default services;
