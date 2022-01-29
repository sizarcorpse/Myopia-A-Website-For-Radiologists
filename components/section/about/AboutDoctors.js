import {} from "react";
import { Box, styled } from "@mui/material";
import { MPDoctor } from "components/ui";

const AboutDoctorsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  justifyContent: "center",
  alignItems: "center",
}));

const AboutDoctors = (props) => {
  const { data } = props;

  return (
    <AboutDoctorsStyled>
      {data.doctorsList.map((doctor, index) => (
        <Box key={index}>
          <MPDoctor item={doctor} />
        </Box>
      ))}
    </AboutDoctorsStyled>
  );
};

export default AboutDoctors;
