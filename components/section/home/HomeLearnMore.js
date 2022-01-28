import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";
import { MPTitle, MPButton } from "components/ui/";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
const HomeLearnMoreStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  "& .contents": {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },

    "& .description": {
      flex: `1 1 calc(50% - 32px)`,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(4),
    },
    "& .video": {
      flex: `1 1 calc(50% - 32px)`,
    },
  },
}));

const HomeLearnMore = (props) => {
  const { data } = props;

  return (
    <HomeLearnMoreStyled>
      <Box className="title">
        <MPTitle title={data.title} subtitle={data.subtitle} />
      </Box>
      <Box className="contents">
        <Box className="description">
          <Typography variant="body1">{data.description}</Typography>
          <MPButton
            goto={data.button[0].linkTo}
            variant={data.button[0].variant}
            icon={<ReadMoreIcon />}
          >
            {data.button[0].title}
          </MPButton>
        </Box>
        <Box className="video">
          <iframe
            title="Myopia"
            id="video"
            width="100%"
            height="100%"
            maxWidth="565px"
            minHeight="318px"
            maxHeight="318px"
            src={data.video.externalUrl}
            frameBorder="0"
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Box>
    </HomeLearnMoreStyled>
  );
};

HomeLearnMore.propTypes = {};

export default HomeLearnMore;
