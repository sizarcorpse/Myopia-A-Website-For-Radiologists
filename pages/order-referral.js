import Head from "next/head";
import { Grid, Container } from "@mui/material";
import {
  OrderReferralPadsHero,
  OrderReferralPadsForm,
} from "components/section/orderReferralPads/";
import { mockReferral } from "mocks/";

const About = (props) => {
  const { hero, referral } = mockReferral;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Contact</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <OrderReferralPadsHero data={hero} />
      </Grid>
      <Grid item xs={12} sx={{ background: "#EDF1F6" }}>
        <Container>
          <OrderReferralPadsForm data={referral} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default About;
