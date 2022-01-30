import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";
import { MPAddressItem } from "components/ui";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const MPAddressStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spacing(3),
  "& .information": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(1),
  },
}));

const MPAddress = (props) => {
  const {
    item: {
      name,
      information: { phone, fax, email, address },
    },
  } = props;

  return (
    <MPAddressStyled>
      <Typography variant="h6" color="primary.dark">
        {name}
      </Typography>
      <Box className="information">
        <MPAddressItem
          icon={<LocalPhoneIcon />}
          label={phone.label}
          value={phone.value}
          type="tel"
        />
        <MPAddressItem
          icon={<FaxIcon />}
          label={fax.label}
          value={fax.value}
          type="fax"
        />
        <MPAddressItem
          icon={<MailIcon />}
          label={email.label}
          value={email.value}
          type="email"
        />
        <MPAddressItem icon={<LocationOnIcon />} label={address} />
      </Box>
    </MPAddressStyled>
  );
};

MPAddress.propTypes = {};

export default MPAddress;
