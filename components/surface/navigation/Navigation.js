import { useState, useEffect, cloneElement } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import NavigationHeader from "./NavigationHeader";
import PatientNavigation from "./PatientNavigation";
import PractitionerNavigation from "./PractitionerNavigation";
import { useRouter } from "next/router";
import { navigation } from "mocks";

import {
  Box,
  styled,
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const NavigationStyled = styled(Box)(({ theme }) => ({}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",

  "& .websiteLogo": {
    a: {
      textDecoration: "none",
    },
  },
}));

const ElevationScroll = (props) => {
  const { children, trigger } = props;
  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    sx: {
      background: trigger ? "#EDF1F6" : "none",
      top: trigger ? "0%" : 50,
      transition: "top 250ms ease-in-out, background 250ms ease-in-out",
      willChange: "top , background",
      "& .navigationItems p": {
        color: trigger ? "#2D3663" : "#EDF1F6",
      },
    },
    trigger: trigger,
  });
};

const getCookies = () => {
  let cooks = Cookies.get("platform");
  if (cooks === undefined) {
    Cookies.set("platform", false);
    let cooks = Cookies.get("platform");
    return cooks === "true" ? true : cooks === "false" ? false : false;
  } else {
    return cooks === "true" ? true : cooks === "false" ? false : false;
  }
};
const Navigation = (props) => {
  const { children } = props;
  const router = useRouter();
  const [platform, setPlatform] = useState(getCookies);
  const matchesMD = useMediaQuery(useTheme().breakpoints.down("md"));

  useEffect(() => {
    Cookies.set("platform", platform);
    if (platform === false) {
      router.push("/");
    } else if (platform === true) {
      router.push("/practitioner");
    }
  }, [platform]);

  const handleSwitchChange = (event) => {
    if (platform === false) {
      setPlatform(true);
    } else if (platform === true) {
      setPlatform(false);
    }
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <NavigationStyled>
      <NavigationHeader handleChange={handleSwitchChange} platform={platform} />

      <ElevationScroll trigger={trigger}>
        <AppBarStyled elevation={0}>
          <Toolbar sx={{ p: 0 }}>
            <Container
              maxWidth="xs"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box className="websiteLogo" sx={{ flexGrow: 1 }}>
                <Link href="/">
                  <a>
                    <Typography
                      variant="h3"
                      color={trigger ? "primary.dark" : "primary.light"}
                    >
                      MYOPIA
                    </Typography>
                  </a>
                </Link>
              </Box>

              {matchesMD ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MenuIcon
                    sx={{ color: trigger ? "primary.dark" : "primary.light" }}
                  />
                </Box>
              ) : (
                <Box className="navigationItems">
                  {platform === false ? (
                    <PatientNavigation items={navigation.patient} />
                  ) : (
                    <PractitionerNavigation items={navigation.practitioner} />
                  )}
                </Box>
              )}
            </Container>
          </Toolbar>
        </AppBarStyled>
      </ElevationScroll>
      <Box>{children}</Box>
    </NavigationStyled>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
