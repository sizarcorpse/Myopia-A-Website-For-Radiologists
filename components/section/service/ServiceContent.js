import PropTypes from "prop-types";

import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MPIconBox, MPAccordion, MPSlider, MPTitle } from "components/ui";

const ServiceContentStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(6),
  },

  "& .contents": {
    flexGrow: 1,
    flexBasis: "calc(50% - 32px)",
  },
  "& .servicesArea": {
    flexGrow: 1,
    flexBasis: "calc(50% - 32px)",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    "& > .title": {
      display: "block",
      width: "100%",
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 4,
      padding: theme.spacing(0, 2),
      [theme.breakpoints.down("md")]: {
        backgroundColor: "transparent",
      },
    },
    "& > .services": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: theme.spacing(2),
      maxWidth: "100%",
    },
  },
}));

const ServiceContent = (props) => {
  const {
    data: { content, services },
  } = props;

  const matchesMD = useMediaQuery(useTheme().breakpoints.down("md"));
  const matchesSM = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <ServiceContentStyled>
      <Box className="contents">
        <MPAccordion items={content} />
      </Box>
      <Box className="servicesArea">
        <Box className="title">
          {matchesMD ? (
            <MPTitle
              title={services.title}
              subtitle={"services"}
              alignment="center"
            />
          ) : (
            <Typography variant="h4" component="h2" color="primary.light">
              {services.title}
            </Typography>
          )}
        </Box>
        <Box className="services">
          {matchesSM ? (
            <MPSlider
              items={services.servicesList}
              mpComponent={<MPIconBox />}
            />
          ) : (
            services.servicesList.map((item, index) => (
              <MPIconBox key={index} item={item} mode="single" />
            ))
          )}
        </Box>
      </Box>
    </ServiceContentStyled>
  );
};

ServiceContent.propTypes = {};

export default ServiceContent;
