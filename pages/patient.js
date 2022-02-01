import Head from "next/head";
import { Grid, Container } from "@mui/material";
import { PatientHero, PatientInformation } from "components/section/patient/";
import { mockPatient } from "mocks/";

const Patient = (props) => {
  const { hero, information } = mockPatient;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Patient</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <PatientHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <PatientInformation data={information} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Patient;
