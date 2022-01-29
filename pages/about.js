import Head from "next/head";
import { Grid, Container } from "@mui/material";
import {
  AboutHero,
  AboutIntroduction,
  AboutDoctors,
} from "components/section/about/";
import { mockAbout } from "mocks/";

const About = (props) => {
  const { hero, introduction, doctors } = mockAbout;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : About</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <AboutHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <AboutIntroduction data={introduction} />
        </Container>
      </Grid>
      <Grid item xs={12} sx={{ background: "#EDF1F6" }}>
        <Container maxWidth="lg">
          <AboutDoctors data={doctors} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default About;
