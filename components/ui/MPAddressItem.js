import { cloneElement } from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MPAddressItemStyled = styled(Box)(({ theme, color }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(2),

  "& svg.MuiSvgIcon-root": {
    color:
      color === "light"
        ? theme.palette.primary.light
        : theme.palette.primary.main,
  },
  "& a": {
    textDecoration: "none",
    color:
      color === "light"
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    transition: "color 0.2s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const setHref = (value, type) => {
  switch (type) {
    case "tel":
      return `tel:${value}`;
    case "email":
      return `mailto:${value}`;
    case "fax":
      return `fax:${value}`;
    default:
      return undefined;
  }
};

const font = {
  small: "body2",
  normal: "body1",
};

const MPAddressItem = (props) => {
  const { icon, label, value, type, variant, color } = props;
  return (
    <MPAddressItemStyled color={color}>
      {cloneElement(icon, {
        fontSize: variant === "small" ? "small" : undefined,
      })}
      <Typography variant={`${font[variant]}`}>
        <a href={setHref(value, type)}>{label}</a>
      </Typography>
    </MPAddressItemStyled>
  );
};

MPAddressItem.defaultProps = {
  variant: "normal",
  color: "dark",
};

MPAddressItem.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["tel", "email", "fax"]),
  variant: PropTypes.oneOf(["small", "normal"]),
  color: PropTypes.oneOf(["dark", "light"]),
};

export default MPAddressItem;
