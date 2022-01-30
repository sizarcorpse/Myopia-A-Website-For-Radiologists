import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPAddressItem } from "components/ui";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const MPAddress = (props) => {
  const {} = props;

  return (
    <Box>
      <MPAddressItem
        icon={<LocalPhoneIcon />}
        label="(+666) 666 33 666"
        value="+66666633666"
        type="tel"
      />
    </Box>
  );
};

MPAddress.propTypes = {};

export default MPAddress;
