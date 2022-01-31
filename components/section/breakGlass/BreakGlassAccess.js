import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPIconText } from "components/ui";

const BreakGlassAccessStyled = styled(Box)(({ theme }) => ({
  "& .steps": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
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

const BreakGlassAccess = (props) => {
  const { data } = props;

  return (
    <BreakGlassAccessStyled>
      <Box className="steps">
        {data.steps.map((item, index) => (
          <Box key={index} className="item">
            <MPIconText item={item} alignItemsOnMobile="center" />
          </Box>
        ))}
      </Box>
    </BreakGlassAccessStyled>
  );
};

BreakGlassAccess.propTypes = {};

export default BreakGlassAccess;
