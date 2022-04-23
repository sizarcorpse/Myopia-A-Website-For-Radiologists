import { forwardRef, cloneElement, Children, isValidElement } from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";

const MPFilterStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2, 0),
  gap: theme.spacing(2),
}));

const MPFilter = forwardRef(({ children, ...props }, ref) => {
  const {} = props;
  return (
    <MPFilterStyled ref={ref}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...props,
          });
        }
      })}
    </MPFilterStyled>
  );
});

MPFilter.propTypes = {};

export default MPFilter;
