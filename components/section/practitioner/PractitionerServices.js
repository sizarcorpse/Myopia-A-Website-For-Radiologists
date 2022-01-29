import {} from "react";
import PropTypes from "prop-types";
import {
  Box,
  styled,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { MPIconBox, MPSlider, MPTitle, MPButton } from "components/ui";
import HubIcon from "@mui/icons-material/Hub";
const PractitionerServicesStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
  },
  "& .contents": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(4),
    maxWidth: "100%",
  },
}));

const PractitionerServices = (props) => {
  const { data } = props;
  const matchesSM = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <PractitionerServicesStyled>
      <MPTitle title={data.title} subtitle={data.subtitle} alignment="center" />
      <Typography variant="body1" color="primary.dark" align="center">
        {data.description}
      </Typography>
      <MPButton
        goto={data.button[0].linkTo}
        variant={data.button[0].variant}
        icon={<HubIcon />}
      >
        {data.button[0].title}
      </MPButton>
      <Box className="contents">
        {matchesSM ? (
          <MPSlider items={data.servicesList} mpComponent={<MPIconBox />} />
        ) : (
          data.servicesList.map((item, index) => (
            <MPIconBox key={index} item={item} />
          ))
        )}
      </Box>
    </PractitionerServicesStyled>
  );
};

PractitionerServices.propTypes = {};

export default PractitionerServices;
