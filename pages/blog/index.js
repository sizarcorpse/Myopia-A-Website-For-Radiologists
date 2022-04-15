import Head from "next/head";
import { Grid, Container, Box } from "@mui/material";
import { BlogHero, BlogPosts } from "components/blog/posts/";
import { mockBlog } from "mocks/";
import useSWR from "swr";

const Blog = (props) => {
  const {} = props;
  const { hero, posts } = mockBlog;
  return (
    <Grid component="main">
      <Head>
        <title>Myopia 👩‍⚕️ : Blog</title>
        <meta name="description" content="A website for radiologists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <BlogHero data={hero} />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <BlogPosts data={posts} />
        </Container>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Blog;
