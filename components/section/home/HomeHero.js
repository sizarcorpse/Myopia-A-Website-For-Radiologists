import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, ButtonGroup } from "@mui/material";
import { MPHeroTitle, MPHero, MPButton } from "components/ui";
import SearchIcon from "@mui/icons-material/Search";
const HomeHero = (props) => {
  const {
    data: {
      title,
      description,
      background: { desktop, mobile },
      button,
    },
  } = props;

  return (
    <MPHero
      backgroundImageForDesktop={desktop}
      backgroundImageForMobile={mobile}
    >
      <MPHeroTitle heroTitle={title} heroDescription={description} />
      <MPButton linkTo={button[0].linkTo} variant="light" icon={<SearchIcon />}>
        {button[0].title}
      </MPButton>
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
