import { useState, useEffect, cloneElement } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavigationHeader from "./NavigationHeader";
import PatientNavigation from "./PatientNavigation";
import PractitionerNavigation from "./PractitionerNavigation";
import { useRouter } from "next/router";
import { navigation } from "mocks";
import { MPDrawer, MpDropdownMenu } from "components/ui";
import { useSession } from "next-auth/react";
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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationStyled = styled(Box)(({ theme }) => ({}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",

  "& .websiteLogo": {
    a: {
      textDecoration: "none",
      fontSize: "14px !important",
    },
  },
}));

const LoginButtonStyled = styled(Button)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.primary.dark,
  textTransform: "none",
  borderRadius: 8,
  padding: theme.spacing(1, 3),
  backgroundImage:
    "radial-gradient(100% 100% at 100% 0, #FCFCFD 0, #EDF1F6 100%)",
  boxShadow: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -10px,rgba(58, 65, 111, .5) 0 -1px 0 inset`,
  transition: `box-shadow .15s,transform .15s`,
  willChange: "box-shadow,transform",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    transform: "translateY(2px)",
  },
}));

const ElevationScroll = (props) => {
  const { children, trigger } = props;

  return cloneElement(children, {
    sx: {
      backdropFilter: trigger ? "blur(5px)" : "none",
      background: trigger ? "rgba(255, 255, 255, 0.72)" : "none",
      top: trigger ? "0%" : 50,
      transition: "top 250ms ease, background 250ms ease",
      boxShadow: trigger ? "rgb(231 235 240) 0px -1px 1px inset" : "none",
      willChange: "top , background",
      "& .navigationItems p": {
        color: trigger ? "#2D3663" : "#EDF1F6",
      },
    },
  });
};

// const getCookies = () => {
//   let cooks = Cookies.get("platform");
//   if (cooks === undefined) {
//     Cookies.set("platform", false);
//     let cooks = Cookies.get("platform");
//     return cooks === "true" ? true : cooks === "false" ? false : false;
//   } else {
//     return cooks === "true" ? true : cooks === "false" ? false : false;
//   }
// };
const Navigation = (props) => {
  const { children } = props;
  const router = useRouter();
  const { data: session, status } = useSession();
  const [platform, setPlatform] = useState(false);
  const matchesMD = useMediaQuery(useTheme().breakpoints.down("md"));
  const [state, setState] = useState({
    right: false,
  });
  // useEffect(() => {
  //   Cookies.set("platform", platform);
  //   if (platform === false) {
  //     router.push("/");
  //   } else if (platform === true) {
  //     router.push("/practitioner");
  //   }
  // }, [platform]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
                      sx={{
                        fontWeight: "bold",
                        fontSize: "28px !important",
                      }}
                    >
                      MYOPIA
                    </Typography>
                  </a>
                </Link>
              </Box>

              {matchesMD ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MenuIcon
                    disablefocusripple="true"
                    disableripple="true"
                    onClick={toggleDrawer("right", true)}
                    sx={{
                      color: trigger ? "primary.dark" : "primary.light",
                      cursor: "pointer",
                    }}
                  />
                  <MPDrawer
                    state={state}
                    toggleDrawer={toggleDrawer}
                    navigationItems={{
                      forPatient: navigation.patient,
                      forPractitioner: navigation.practitioner,
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "24px" }}
                >
                  <Box className="navigationItems">
                    {platform === false ? (
                      <PatientNavigation items={navigation.patient} />
                    ) : (
                      <PractitionerNavigation items={navigation.practitioner} />
                    )}
                  </Box>
                  <Box className="userNav">
                    {session ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        }}
                      >
                        <MpDropdownMenu
                          user={session.user}
                          variant="withButton"
                        />
                      </Box>
                    ) : (
                      <LoginButtonStyled
                        className="loginButton"
                        onClick={() => router.push("/login")}
                      >
                        Login
                      </LoginButtonStyled>
                    )}
                  </Box>
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
