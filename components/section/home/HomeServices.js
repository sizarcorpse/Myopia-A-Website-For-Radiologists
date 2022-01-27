import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";
import { MPIconBox, MPSlider } from "components/ui";

const HomeServices = (props) => {
  const { data } = props;
  const matchesSM = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {matchesSM ? (
        <MPSlider items={data.servicesList} mpComponent={<MPIconBox />} />
      ) : (
        data.servicesList.map((item, index) => (
          <MPIconBox key={index} item={item} />
        ))
      )}
    </Box>
  );
};

HomeServices.propTypes = {};

export default HomeServices;
