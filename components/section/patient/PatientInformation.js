import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPTabs, MPTitle } from "components/ui/";
const PatientInformation = (props) => {
  const {
    data: { title, subtitle, descriptions },
  } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <MPTitle title={title} subtitle={subtitle} alignment="center" />
      <MPTabs items={descriptions} />
    </Box>
  );
};

PatientInformation.propTypes = {};

export default PatientInformation;
