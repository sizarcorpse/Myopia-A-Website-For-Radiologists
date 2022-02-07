import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MpTitleStyled = styled(Box)(({ theme, alignment, isSubtitle }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginBottom: "4px",
  width: "100%",
  "& .subtitle": {
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: alignment,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  "& .title": {
    display: "block",
    width: "100%",
    textAlign: alignment,
    marginTop: "-2.5rem",
    [theme.breakpoints.down("lg")]: {
      marginTop: "-2.1rem",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-1.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-1.6rem",
      textAlign: "center",
    },
  },
}));

const MPTitle = (props) => {
  const { subtitle, title, alignment, subtitleColor } = props;

  return (
    <MpTitleStyled alignment={alignment} isSubtitle={subtitle}>
      <Typography
        variant="h1"
        component="p"
        className="subtitle"
        color={subtitleColor}
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
  subtitleColor: "primary.light",
};

MPTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(["left", "center"]),
  subtitleColor: PropTypes.oneOf(["primary.light", "primary.lightish"]),
};

export default MPTitle;
