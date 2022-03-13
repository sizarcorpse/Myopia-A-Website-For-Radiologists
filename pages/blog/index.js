import Head from "next/head";
import { Grid, Container, Box } from "@mui/material";
import { BlogHero, BlogPosts } from "components/blog/posts/";
import { mockBlog } from "mocks/";

const Blog = (props) => {
  const { hero, posts } = props;
  // const { hero, posts } = mockBlog;
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

export async function getStaticProps() {
  // const res = await fetch('https://.../posts')
  const { hero, posts } = await mockBlog;

  return {
    props: {
      hero,
      posts,
    },
    revalidate: 10,
  };
}

export default Blog;
