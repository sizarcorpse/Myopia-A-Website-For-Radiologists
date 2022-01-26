import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPHeroTitle, MPHero } from "components/ui";

const HomeHero = (props) => {
  const {
    data: {
      title,
      description,
      background: { desktop, mobile },
    },
  } = props;

  return (
    <MPHero
      backgroundImageForDesktop={desktop}
      backgroundImageForMobile={mobile}
    >
      <MPHeroTitle heroTitle={title} heroDescription={description} />
    </MPHero>
  );
};

HomeHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default HomeHero;
