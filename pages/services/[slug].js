import {} from "react";
import Head from "next/head";

import { Grid, Container } from "@mui/material";
import { ServiceHero, ServiceContent } from "components/section/service/";
import { mockService } from "mocks/";
const Service = (props) => {
  const {
    services,
    service: { hero, content, title, slug },
  } = props;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 🥼 : {title}</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12} sx={{ background: "#EDF1F6" }}>
        <Container maxWidth="lg">
          <ServiceHero data={hero} />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <ServiceContent data={{ content, services, title, slug }} />
        </Container>
      </Grid>
    </Grid>
  );
};

export async function getStaticPaths() {
  const { servicesDetails } = await mockService;

  return {
    paths: servicesDetails.map((service) => ({
      params: { slug: service.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { servicesDetails, servicesList } = await mockService;

  return {
    props: {
      services: servicesList,
      service: await servicesDetails.find(
        (service) => service.slug === params.slug
      ),
    },
  };
}

export default Service;
