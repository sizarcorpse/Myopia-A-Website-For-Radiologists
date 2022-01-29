import Head from "next/head";
import { Grid, Container } from "@mui/material";
import { AboutHero } from "components/section/about/";
import { mockAbout } from "mocks/";

const About = (props) => {
  const { hero } = mockAbout;

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
    </Grid>
  );
};

export default About;
