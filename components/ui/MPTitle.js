import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MpTitleStyled = styled(Box)(({ theme, alignment, isSubtitle }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginBottom: "4px",
  outline: "1px solid red",

  "& .subtitle": {
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: alignment,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  "& .title": {
    position: isSubtitle ? "absolute" : "relative",
    display: "block",
    width: "100%",
    top: "58%",
    left: alignment === "left" ? 0 : alignment === "center" ? "50%" : 0,
    transform:
      alignment === "left"
        ? "none"
        : alignment === "center"
        ? "translate(-50%, 0%)"
        : "none",
    textAlign: alignment,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%, 0%)",
    },
  },
}));

const MPTitle = (props) => {
  const { subtitle, title, alignment } = props;

  return (
    <MpTitleStyled alignment={alignment} isSubtitle={subtitle}>
      <Typography
        variant="h1"
        component="p"
        className="subtitle"
        color="primary.light"
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        className="title"
        color="primary.dark"
      >
        {title}
      </Typography>
    </MpTitleStyled>
  );
};

MPTitle.defaultProps = {
  alignment: "left",
};

MPTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(["left", "center"]),
};

export default MPTitle;
