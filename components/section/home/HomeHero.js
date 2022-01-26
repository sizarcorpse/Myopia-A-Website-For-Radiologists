import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPHeroTitle } from "components/ui";

const HomeHero = (props) => {
  const {} = props;

  return (
    <Box>
      <MPHeroTitle
        heroTitle="Community Radiology"
        heroDescription="Our professional staff are committed to efficiently carrying out the delivery of quality imaging services by utilising evidence-based medicine founded on the latest research and contributes to the scientific literature."
      />
    </Box>
  );
};

HomeHero.propTypes = {};

export default HomeHero;
