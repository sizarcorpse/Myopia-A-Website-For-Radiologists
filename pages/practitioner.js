import Head from "next/head";
import { Grid } from "@mui/material";
import { PractitionerHero } from "components/section/practitioner/";
import { mockPractitioner } from "mocks/";

const PractitionerHome = () => {
  const { hero } = mockPractitioner;
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
    </Grid>
  );
};

export default PractitionerHome;
