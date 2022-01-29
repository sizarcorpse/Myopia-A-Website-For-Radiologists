import Head from "next/head";
import { Grid, Container } from "@mui/material";
import {
  ServicesHero,
  ServicesAllService,
  ServicesWhyUs,
} from "components/section/service/";
import { mockServices } from "mocks/";
const services = () => {
  const { hero, services, why } = mockServices;

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
      <Grid item xs={12} sx={{ background: "#EDF1F6" }}>
        <Container maxWidth="lg">
          <ServicesWhyUs data={why} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default services;
