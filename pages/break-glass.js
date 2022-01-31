import Head from "next/head";
import { Grid, Container } from "@mui/material";
import {
  BreakGlassHero,
  BreakGlassIntroduction,
  BreakGlassAccess,
} from "components/section/breakGlass/";
import { mockBreakGlass } from "mocks/";

const BreakGlass = (props) => {
  const { hero } = mockBreakGlass;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Break Glass</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <BreakGlassHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container></Container>
      </Grid>
    </Grid>
  );
};

export default BreakGlass;
