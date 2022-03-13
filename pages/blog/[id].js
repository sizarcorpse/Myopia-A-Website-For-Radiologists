import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { mockBlog } from "mocks/";

const BlogDetails = (props) => {
  const { data } = props;

  return <Box>{JSON.stringify(data)}</Box>;
};

export async function getStaticPaths() {
  const { posts } = await mockBlog;

  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { posts } = await mockBlog;

  return {
    props: {
      data: await posts.find((post) => post.id === Number(params.id)),
    },
  };
}

BlogDetails.propTypes = {};

export default BlogDetails;
