import {} from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";
import { MPTitle, MPButton } from "components/ui/";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
const AboutIntroductionStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "932px",
    margin: "0 auto",
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  "& .imageArea": {
    flex: `1 1 calc(40% - 32px)`,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  "& .contentArea": {
    flex: `1 1 calc(60% - 32px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

const AboutIntroduction = (props) => {
  const {
    data: { title, subtitle, description, button, photo },
  } = props;

  return (
    <AboutIntroductionStyled>
      <Box className="imageArea">
        <Image
          src={photo.desktop}
          width={442}
          height={325}
          alt={photo.alt}
          quality={100}
          priority={true}
        />
      </Box>
      <Box className="contentArea">
        <MPTitle subtitle={subtitle} title={title} />
        <Typography variant="body1" component="p">
          {description}
        </Typography>
        <MPButton
          goto={button[0].linkTo}
          variant={button[0].variant}
          icon={<LocalHospitalIcon />}
        >
          {button[0].title}
        </MPButton>
      </Box>
    </AboutIntroductionStyled>
  );
};

AboutIntroduction.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.shape({
      desktop: PropTypes.string,
      mobile: PropTypes.string,
      alt: PropTypes.string,
    }),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        linkTo: PropTypes.string,
        variant: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default AboutIntroduction;
