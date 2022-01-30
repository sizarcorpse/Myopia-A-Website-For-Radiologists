import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MPAddressItemStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(2),

  "& svg.MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
  "& a": {
    textDecoration: "none",
    color: theme.palette.primary.dark,
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

const MPAddressItem = (props) => {
  const { icon, label, value, type } = props;

  return (
    <MPAddressItemStyled>
      {icon}
      <Typography variant="body1" color="primary.dark">
        <a href={setHref(value, type)}>{label}</a>
      </Typography>
    </MPAddressItemStyled>
  );
};

MPAddressItem.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["tel", "email", "fax"]),
};

export default MPAddressItem;
