import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPIconText } from "components/ui";

const OnlineImageFeatureStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  "& .steps": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(2),
    },
    "& .item": {
      flex: "1 1 calc(33% - 32px)",
      [theme.breakpoints.down("md")]: {
        flex: "1 1 calc(50% - 32px)",
      },
    },
  },
}));

const OnlineImageFeature = (props) => {
  const { data } = props;

  return (
    <OnlineImageFeatureStyled>
      <Box className="steps">
        {data.map((item, index) => (
          <Box key={index} className="item">
            <MPIconText item={item} variant="row" alignItemsOnMobile="center" />
          </Box>
        ))}
      </Box>
    </OnlineImageFeatureStyled>
  );
};

OnlineImageFeature.propTypes = {};

export default OnlineImageFeature;
