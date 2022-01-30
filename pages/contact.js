import Head from "next/head";
import { Grid, Container } from "@mui/material";
import { ContactHero, ContactForm } from "components/section/contact/";
import { mockContact } from "mocks/";

const About = (props) => {
  const { hero, contact } = mockContact;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Contact</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <ContactHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <ContactForm data={contact} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default About;
