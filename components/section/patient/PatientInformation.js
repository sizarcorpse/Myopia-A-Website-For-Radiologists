import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPTabs } from "components/ui/";
const PatientInformation = (props) => {
  const { data } = props;

  return (
    <Box>
      <MPTabs items={data.descriptions} />
    </Box>
  );
};

PatientInformation.propTypes = {};

export default PatientInformation;
