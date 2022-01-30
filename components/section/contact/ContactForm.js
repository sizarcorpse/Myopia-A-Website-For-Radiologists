import {} from "react";
import { Box, styled, Typography } from "@mui/material";
import { AppointmentForm } from "components/form";
import { MPTitle, MPAddress } from "components/ui";

const ContactFormStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),

  "& .contents": {
    flex: `1 1 calc(50% - ${theme.spacing(4)})`,
  },
}));
const FormBoxStyled = styled(Box)(({ theme }) => ({
  flex: `1 1 calc(50% - ${theme.spacing(4)})`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(8, 4),
  maxWidth: 600,
  borderRadius: 4,
  boxShadow:
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
  "& .titles": {
    textAlign: "center",
  },
}));

const ContactForm = (props) => {
  const {
    data: { header, locations, choices },
  } = props;

  return (
    <ContactFormStyled>
      <Box className="contents">
        <MPTitle title={header.title} subtitle={header.subtitle} />
        <Typography variant="body1" className="titles">
          {header.description}
        </Typography>

        <MPAddress data={locations} />
      </Box>
      <FormBoxStyled>
        <Box className="titles">
          <Typography variant="caption" component="p" color="primary.dark">
            Have an inquiry?
          </Typography>
          <Typography variant="h4" color="primary.dark">
            Book a Quick Appointment
          </Typography>
        </Box>
        <AppointmentForm choices={choices} />
      </FormBoxStyled>
    </ContactFormStyled>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
