import Head from "next/head";
import { Grid, Container } from "@mui/material";
import { LoginHero, ContactForm } from "components/section/login/";
import { mockLogin } from "mocks/";
import { getProviders, signIn, signOut, getSession } from "next-auth/react";

const Login = (props) => {
  const { session, providers } = props;
  const { hero } = mockLogin;

  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Login</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <LoginHero data={hero} providers={providers} signIn={signIn} />
      </Grid>
      {/* <Grid item xs={12}>
        <Container>
          <ContactForm data={contact} />
        </Container>
      </Grid> */}
    </Grid>
  );
};

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  const session = await getSession({ req });
  const providers = await getProviders();

  if (session && res && session.user) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      session: null,
      providers: providers,
    },
  };
}

export default Login;
