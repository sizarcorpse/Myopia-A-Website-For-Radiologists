import {} from "react";
import Head from "next/head";

import PropTypes from "prop-types";
import { Box, styled, Grid, Container } from "@mui/material";
import { ServiceHero, ServiceContent } from "components/section/service/";
import { mockService } from "mocks/";
const Service = (props) => {
  const {} = props;
  const { hero, content, services } = mockService;
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : About</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12} sx={{ background: "#EDF1F6" }}>
        <Container maxWidth="lg">
          <ServiceHero />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <ServiceContent data={{ content, services }} />
        </Container>
      </Grid>
    </Grid>
  );
};

Service.propTypes = {};

export default Service;
