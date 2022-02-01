import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";
import { OrderReferralForm } from "components/form";

const OrderReferralPadsFormStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const FormBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(8, 4),
  maxWidth: 767,
  borderRadius: 4,
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
}));

const OrderReferralPadsForm = (props) => {
  const {
    data: { header, choices },
  } = props;

  return (
    <OrderReferralPadsFormStyled>
      <Typography
        variant="h4"
        color="primary.dark"
        align="center"
        sx={{ maxWidth: 900 }}
      >
        {header.title}
      </Typography>{" "}
      <FormBoxStyled>
        <OrderReferralForm choices={choices} />
      </FormBoxStyled>
    </OrderReferralPadsFormStyled>
  );
};

OrderReferralPadsForm.propTypes = {};

export default OrderReferralPadsForm;
