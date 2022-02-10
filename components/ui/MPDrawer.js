import { useState } from "react";
import Link from "next/link";
import {
  styled,
  Typography,
  Box,
  IconButton,
  SwipeableDrawer,
  Stack,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minWidth: "300px",
  maxWidth: "300px",
  backgroundColor: theme.palette.primary.blue,
  "& .action": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "56px",
    padding: theme.spacing(1),
    borderBottom: `1px solid #E7EBF0`,
    backgroundColor: theme.palette.primary.white,
  },
}));

const PlatformBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1, 0),
  "& .title": {
    padding: theme.spacing(0.5, 2),
    "&:hover": {
      borderRadius: "4px",
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const StackStyled = styled(Stack)(({ theme }) => ({
  "& .navigationItem": {
    position: "relative",
    width: "100%",
    textAlign: "left",
    zIndex: 1,

    "& a": {
      width: "100%",
      display: "block",
      textDecoration: "none",
      padding: theme.spacing(0.5, 4),
      color: theme.palette.primary.dark,
      "&:hover": {
        borderRadius: "4px",
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandItems = ({ toggleDrawer, menus, title }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <PlatformBox>
      <Box
        display="flex"
        alignItems="center"
        className="title"
        expand={expanded}
        onClick={handleExpandClick}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h6" color="primary.dark" component="p">
          {title}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize="small" />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <StackStyled
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="navigationItems"
          onClick={toggleDrawer("right", false)}
        >
          {menus.map((item, index) => (
            <Typography
              variant="body1"
              color="primary.dark"
              key={index}
              className="navigationItem"
            >
              <Link href={item.url.path}>{item.title}</Link>
            </Typography>
          ))}
        </StackStyled>
      </Collapse>
    </PlatformBox>
  );
};

const PBDrawer = ({
  toggleDrawer,
  state,
  navigationItems: { forPatient, forPractitioner },
}) => {
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
      onOpen={toggleDrawer("right", true)}
    >
      <ContentBox>
        <Box className="action">
          <IconButton
            disablefocusripple="true"
            disableripple="true"
            onClick={toggleDrawer("right", false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ overflowY: "scroll" }}>
          <Box p={1}>
            <ExpandItems
              menus={forPatient}
              toggleDrawer={toggleDrawer}
              title="Patient"
            />
            <ExpandItems
              menus={forPractitioner}
              toggleDrawer={toggleDrawer}
              title="Practitioner"
            />
          </Box>
        </Box>
      </ContentBox>
    </SwipeableDrawer>
  );
};

export default PBDrawer;
