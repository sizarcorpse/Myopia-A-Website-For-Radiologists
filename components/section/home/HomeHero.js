import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, ButtonGroup } from "@mui/material";
import { MPHeroTitle, MPHero, MPButton, MPButtonGroup } from "components/ui";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
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

      <MPButtonGroup>
        <MPButton
          linkTo={button[0].linkTo}
          variant={button[0].variant}
          icon={<SearchIcon />}
        >
          {button[0].title}
        </MPButton>
        <MPButton
          linkTo={button[1].linkTo}
          variant={button[1].variant}
          icon={<SendIcon />}
        >
          {button[1].title}
        </MPButton>
      </MPButtonGroup>
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