import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPTitle } from "components/ui";
const ServiceHero = (props) => {
  const {
    data: { title, subTitle },
  } = props;

  return (
    <Box height={220} display="flex" alignItems="center">
      <MPTitle
        title={title}
        subtitle={subTitle}
        alignment="center"
        subtitleColor="primary.lightish"
      />
    </Box>
  );
};

ServiceHero.propTypes = {};

export default ServiceHero;
