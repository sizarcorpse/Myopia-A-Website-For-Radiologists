import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";

import { MPIconText } from "components/ui";

const HomeOurTechnology = (props) => {
  const { data } = props;

  return (
    <Box>
      <MPIconText item={data.technologies[0]} variant="column" />
    </Box>
  );
};

HomeOurTechnology.propTypes = {};

export default HomeOurTechnology;
