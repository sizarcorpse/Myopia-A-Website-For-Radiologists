import Head from "next/head";
import { Grid, Container } from "@mui/material";
import {
  PractitionerHero,
  PractitionerServices,
  PractitionerJoinUs,
} from "components/section/practitioner/";
import { mockPractitioner } from "mocks/";

const PractitionerHome = () => {
  const { hero, services } = mockPractitioner;
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👨‍⚕️ : Practitioner</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <PractitionerHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <PractitionerServices data={services} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default PractitionerHome;
