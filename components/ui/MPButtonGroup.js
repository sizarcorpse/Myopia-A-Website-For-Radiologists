import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";

const MPButtonGroupStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const MPButtonGroup = (props) => {
  const { children } = props;

  return <MPButtonGroupStyled>{children}</MPButtonGroupStyled>;
};

MPButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MPButtonGroup;
