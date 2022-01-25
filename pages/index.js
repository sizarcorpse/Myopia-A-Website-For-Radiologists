import Head from "next/head";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h1" color="primary.yellow">
        Does is work?
      </Typography>
    </div>
  );
}
