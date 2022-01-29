import { useState } from "react";
import PropTypes from "prop-types";
import { Box, styled, Typography, Collapse, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const MPDoctorStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),
  maxWidth: "900px",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  boxShadow:
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: theme.spacing(0),
    maxWidth: "420px",
    margin: "0 auto",
  },

  "& .image": {
    flex: `1 1 calc(220px - 32px)`,
    width: 220,
    height: 218,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "280px",
    },
    "& > img": {
      borderRadius: theme.spacing(1),
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        objectFit: "cover",
      },
    },
  },
  "& .contents": {
    flex: `1 1 calc(100% - (220px + 32px))`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(2),

    "& button": {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: theme.palette.primary.dark,
      textTransform: "none",
      position: "relative",
      padding: theme.spacing(0, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4, 4),
      textAlign: "center",
      alignItems: "center",
    },
  },
}));

const MPDoctor = (props) => {
  const {
    item: { name, profilePhoto, qualification, excerpt, bio },
  } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <MPDoctorStyled>
      <Box className="image">
        <img src={profilePhoto} alt={name} />
      </Box>
      <Box className="contents">
        <Typography variant="h4" color="primary.dark" className="name">
          {name}
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ display: "block" }}
          >
            {qualification}
          </Typography>
        </Typography>
        <Typography variant="body1" color="primary.dark">
          {excerpt}
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body1" color="primary.dark">
            <Typography variant="caption" color="primary.dark">
              Biography :
            </Typography>
            {bio}
          </Typography>
        </Collapse>
        <Button
          expand={expanded.toString()}
          onClick={handleExpandClick}
          aria-label="show more"
          variant="text"
          disableRipple={true}
          disableFocusRipple={true}
          endIcon={!expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        >
          {!expanded ? "Read More" : "Less More"}
        </Button>
      </Box>
    </MPDoctorStyled>
  );
};

MPDoctor.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default MPDoctor;
