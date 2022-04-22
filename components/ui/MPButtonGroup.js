import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";

const MPButtonGroupStyled = styled(Box)(({ theme, jc }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: jc,
  alignItems: "center",
  gap: theme.spacing(2),
}));

const MPButtonGroup = (props) => {
  const { children, justifyContent } = props;

  return (
    <MPButtonGroupStyled jc={justifyContent}>{children}</MPButtonGroupStyled>
  );
};

MPButtonGroup.defaultProps = {
  justifyContent: "flex-start",
};

MPButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
};

export default MPButtonGroup;
