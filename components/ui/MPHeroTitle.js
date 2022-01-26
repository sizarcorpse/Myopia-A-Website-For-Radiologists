import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MpHeroStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
}));

const MPHero = (props) => {
  const { heroTitle, heroDescription } = props;

  return (
    <MpHeroStyled>
      <Typography
        variant="h2"
        component="h1"
        color="primary.light"
        className="heroTitle"
      >
        {heroTitle}
      </Typography>
      <Typography
        variant="body1"
        color="primary.light"
        className="heroDescription"
        sx={{
          maxWidth: "65ch",
        }}
      >
        {heroDescription}
      </Typography>
    </MpHeroStyled>
  );
};

MPHero.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
};

export default MPHero;
