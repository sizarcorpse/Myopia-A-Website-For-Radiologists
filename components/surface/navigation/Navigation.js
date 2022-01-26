import { useState, useEffect } from "react";
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
  Slide,
  Container,
} from "@mui/material";

const NavigationStyled = styled(Box)(({ theme }) => ({}));
const AppBarStyled = styled(AppBar)(({ theme, isScroll }) => ({
  backgroundColor: "transparent",
  top: isScroll ? 0 : "auto",
  "& .websiteLogo": {
    a: {
      textDecoration: "none",
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 0,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
  const [isScroll, setIsScroll] = useState(false);
  const [platform, setPlatform] = useState(getCookies);

  useEffect(() => {
    Cookies.set("platform", platform);
    if (platform === false) {
      router.push("/");
    } else if (platform === true) {
      router.push("/practitioner");
    }
  }, [platform]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const handleSwitchChange = (event) => {
    if (platform === false) {
      setPlatform(true);
    } else if (platform === true) {
      setPlatform(false);
    }
  };

  return (
    <NavigationStyled>
      <NavigationHeader handleChange={handleSwitchChange} platform={platform} />

      <HideOnScroll {...props}>
        <AppBarStyled {...isScroll} elevation={0}>
          <Toolbar sx={{ p: 0 }}>
            <Container
              maxWidth="xs"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box className="websiteLogo" sx={{ flexGrow: 1 }}>
                <Link href="/">
                  <a>
                    <Typography variant="h3" color="primary.light">
                      MYOPIA
                    </Typography>
                  </a>
                </Link>
              </Box>
              <Box className="navigationItems">
                {platform === false ? (
                  <PatientNavigation items={navigation.patient} />
                ) : (
                  <PractitionerNavigation items={navigation.practitioner} />
                )}
              </Box>
            </Container>
          </Toolbar>
        </AppBarStyled>
      </HideOnScroll>
      <Box>{children}</Box>
    </NavigationStyled>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
