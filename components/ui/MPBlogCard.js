import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MPBlogCardStyled = styled(Box)(({ theme, layout }) => ({
  display: "flex",
  flexDirection: layout != "featured" ? "column" : "row-reverse",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: layout != "featured" ? 600 : 980,
  gap: theme.spacing(2),
  "@media (max-width:674px)": {
    flexDirection: "column",
  },

  ".image": {
    "& span": {
      borderRadius: 6,
      display: "block !important",
    },
    borderRadius: 6,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    transition: "box-shadow .15s, transform .15s",
    "&:hover": {
      boxShadow: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
      transform: "translateY(2px)",
    },
  },
  ".contents": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(1.5),
    ".noStyle": {
      textDecoration: "none",
      cursor: "pointer",
    },
    ".title": {
      fontWeight: "600",
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.3em",
    },

    ".cardHeader, .cardFooter": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: theme.spacing(2),
    },
  },
}));

const MPBlogCard = (props) => {
  const {
    layout,
    item: {
      id,
      cover: { thumbnail, original },
      title,
      excerpt,
      category,
      author,
      createdAt,
      slug,
      isFeatured,
    },
  } = props;

  return (
    <MPBlogCardStyled layout={layout}>
      <Box className="image">
        <Link href="/blog/[id]" as={`/blog/${id}`}>
          <a className="noStyle">
            <Image
              src={original}
              width={1280}
              height={720}
              priority={true}
              objectFit="cover"
              alt={title}
            />
          </a>
        </Link>
      </Box>
      <Box className="contents">
        <Box className="cardHeader">
          <Typography variant="button" component="p" color="primary.main">
            {category}
          </Typography>
          <Typography
            variant="h8"
            component="p"
            color="primary.lightish"
          ></Typography>
        </Box>
        <Link href="/blog/[slug]" as={`/blog/${slug}`}>
          <a className="noStyle">
            <Typography
              variant="h7"
              component="h2"
              className="title"
              color="primary.dark"
            >
              {title}
            </Typography>
          </a>
        </Link>
        <Typography variant="body1" className="excerpt" color="primary.dark">
          {excerpt}
        </Typography>

        {!isFeatured && (
          <Box className="cardFooter">
            <Typography
              variant="body2"
              component="p"
              className="author"
              color="primary.main"
              sx={{ fontWeight: "500" }}
            >
              {author}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="date"
              color="primary.darkish"
              sx={{ fontWeight: "500" }}
            >
              {createdAt}
            </Typography>
          </Box>
        )}
      </Box>
    </MPBlogCardStyled>
  );
};

MPBlogCard.defaultProps = {
  layout: "regular",
};

MPBlogCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    cover: PropTypes.shape({
      thumbnail: PropTypes.string,
      original: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool.isRequired,
  }),
};

export default MPBlogCard;
