import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPTitle } from "components/ui/";

const HomeIntroduction = (props) => {
  const {} = props;

  return (
    <Box>
      <MPTitle
        subtitle="Services"
        title="Locally Owned and Operated."
        alignment="center"
      />
    </Box>
  );
};

HomeIntroduction.propTypes = {};

export default HomeIntroduction;
