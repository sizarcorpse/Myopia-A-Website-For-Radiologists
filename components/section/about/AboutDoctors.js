import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPDoctor } from "components/ui";

const AboutDoctors = (props) => {
  const { data } = props;

  return (
    <Box>
      <MPDoctor item={data.doctorsList[0]}></MPDoctor>
    </Box>
  );
};

AboutDoctors.propTypes = {};

export default AboutDoctors;
