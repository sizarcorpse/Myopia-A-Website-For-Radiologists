import Head from "next/head";
import { Grid, Container } from "@mui/material";
import {
  OnlineImageHero,
  OnlineImageIntroduction,
  OnlineImageFeature,
  OnlineImageFaq,
} from "components/section/onlineImage";
import { mockOnlineImage } from "mocks/";

const OnlineImaging = (props) => {
  const { hero, introduction, features } = mockOnlineImage;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Online Imaging</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <OnlineImageHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <OnlineImageIntroduction data={introduction} />
          <OnlineImageFeature data={features} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default OnlineImaging;
