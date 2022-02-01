import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  styled,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

const MPTabsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    gap: theme.spacing(1),

    "& .MuiTabs-flexContainer": {
      alignItems: "center",
      justifyContent: "center",
    },
  },

  width: "100%",
  maxWidth: 900,
  margin: "0 auto",
  "& > .tabs": {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: `calc(89px)`,
    "& button": {
      padding: theme.spacing(0, 0),
      margin: theme.spacing(0, 0, 2),
      width: "90px",
      height: "90px",
      minWidth: "80px",
      [theme.breakpoints.down("sm")]: {
        width: "65px !important",
        height: "65px",
      },
      "&.Mui-selected": {
        "& img": {
          filter: "grayscale(0%)",
          transition: "all 0.3s ease",
        },
      },
      "& img": {
        width: "100%",
        height: "100%",
        filter: "grayscale(100%)",
        [theme.breakpoints.down("sm")]: {
          width: "65px",
          height: "65px",
        },
      },
    },
  },
  "& > div": {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: `calc(100% - 89px)`,

    "&  .content": {
      padding: theme.spacing(2, 0, 2, 4),

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MPTabs = (props) => {
  const { items } = props;
  const [value, setValue] = useState(0);
  const matchSM = useMediaQuery(useTheme().breakpoints.down("sm"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MPTabsStyled>
      <Tabs
        orientation={matchSM ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className="tabs"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        {items.map((item, index) => (
          <Tab
            key={index}
            disableRipple
            icon={<img alt="#" src={`${item.icon}`} />}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {items.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Box className="content">
            <Typography variant="body1" color="primary.dark">
              {item.content}
            </Typography>
          </Box>
        </TabPanel>
      ))}
    </MPTabsStyled>
  );
};

MPTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number,
      icon: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default MPTabs;
