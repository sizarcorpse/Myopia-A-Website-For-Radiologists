import {} from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Box, styled } from "@mui/material";
import { MPBlogCard } from "components/ui";

const BlogPostsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),

  "@media (max-width: 1254px)": {
    gap: theme.spacing(6),
  },
}));
const BlogPostFeaturedStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: theme.spacing(12),

  "@media (max-width: 1254px)": {
    gap: theme.spacing(6),
  },
}));

const BlogPostRecentStyled = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(584px, 1fr))",
  gridTemplateRows: "repeat(auto-fill, minmax(310px, 1fr))",
  rowGap: theme.spacing(6),
  columnGap: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fill, minmax(294px, 1fr))",
  },
}));
const BlogPostStyled = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(381px, 1fr))",
  gridTemplateRows: "repeat(auto-fill, minmax(310px, 1fr))",
  rowGap: theme.spacing(6),
  columnGap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fill, minmax(294px, 1fr))",
  },
}));

const BlogPosts = (props) => {
  const { data } = props;

  return (
    <BlogPostsStyled>
      <BlogPostFeaturedStyled className="latest-released">
        {data.map(
          (post, index) =>
            post.isFeatured === true && (
              <box key={index}>
                <MPBlogCard item={post} layout="featured" />
              </box>
            )
        )}
      </BlogPostFeaturedStyled>
      <BlogPostRecentStyled className="latest-released">
        {_.slice(data, 0, 2).map((post, index) => (
          <box key={index}>
            <MPBlogCard item={post} />
          </box>
        ))}
      </BlogPostRecentStyled>
      <BlogPostStyled className="all-released">
        {_.slice(data, 2, 5).map((post, index) => (
          <box key={index}>
            <MPBlogCard item={post} />
          </box>
        ))}
      </BlogPostStyled>
    </BlogPostsStyled>
  );
};

BlogPosts.propTypes = {};

export default BlogPosts;
