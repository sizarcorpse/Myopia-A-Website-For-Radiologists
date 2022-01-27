import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";
import { MPIconBox, MPSlider, MPTitle } from "components/ui";

const HomeServicesStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(10),
  padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },
  "& .contents": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(4),
    maxWidth: "100%",
  },
}));

const HomeServices = (props) => {
  const { data } = props;
  const matchesSM = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <HomeServicesStyled>
      <MPTitle title={data.title} subtitle={data.subtitle} alignment="center" />
      <Box className="contents">
        {matchesSM ? (
          <MPSlider items={data.servicesList} mpComponent={<MPIconBox />} />
        ) : (
          data.servicesList.map((item, index) => (
            <MPIconBox key={index} item={item} />
          ))
        )}
      </Box>
    </HomeServicesStyled>
  );
};

HomeServices.propTypes = {};

export default HomeServices;
