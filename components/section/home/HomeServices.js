import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPIconBox } from "components/ui";

const HomeServices = (props) => {
  const { data } = props;

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
      {data.servicesList.map((item, index) => (
        <MPIconBox key={index} item={item} />
      ))}
    </Box>
  );
};

HomeServices.propTypes = {};

export default HomeServices;
