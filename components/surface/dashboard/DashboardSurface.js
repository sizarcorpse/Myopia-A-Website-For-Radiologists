import { useState, createElement } from "react";
import Link from "next/link";
import {
  styled,
  useTheme,
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Grid,
  Container,
} from "@mui/material";

import { MpDropdownMenu } from "components/ui";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import PermMediaIcon from "@mui/icons-material/PermMedia";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.primary.dark,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme, open }) => ({
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  padding: theme.spacing(0, 2.5),
}));
const ListItemIconStyled = styled(ListItemIcon)(({ theme, open }) => ({
  minWidth: 0,
  marginRight: open ? theme.spacing(3) : "auto",
  justifyContent: "center",
  color: theme.palette.primary.dark,
}));
const ListItemTextStyled = styled(ListItemText)(({ theme, open }) => ({
  color: theme.palette.primary.dark,
}));

const menus = {
  indexes: [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      link: "/dashboard",
    },
  ],
  collections: [
    {
      name: "Users",
      icon: GroupIcon,
      link: "/dashboard/users",
    },
    {
      name: "Articles",
      icon: ArticleIcon,
      link: "/dashboard/articles",
    },
    {
      name: "Categories",
      icon: CategoryIcon,
      link: "/dashboard/categories",
    },
  ],
  assets: [
    {
      name: "Media",
      icon: PermMediaIcon,
      link: "/dashboard/media",
    },
  ],
};

const DashboardSurface = (props) => {
  const {
    children,
    session: { user },
  } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0} component="div">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-end" : "space-between ",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <MpDropdownMenu user={user} variant="withAvatar" />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {Object.values(menus).map((menu, index) => (
          <Box key={index}>
            <List>
              {menu.map((item, index) => (
                <ListItemButtonStyled key={index} open={open}>
                  <ListItemIconStyled open={open}>
                    {createElement(item.icon, true)}
                  </ListItemIconStyled>
                  <ListItemTextStyled
                    primary={
                      <Link href={`${item.link}`}>
                        <Typography variant="h8" fontWeight={500} component="p">
                          {item.name}
                        </Typography>
                      </Link>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButtonStyled>
              ))}
            </List>
            <Divider />
          </Box>
        ))}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          margin: "0 auto",
        }}
      >
        <DrawerHeader />
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              height: "220px",
              backgroundImage: "url(/assets/root/Profile-Cover-Photo.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Grid>
          <Grid item xs={12}>
            <Container maxWidth="Md">{children}</Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

DashboardSurface.propTypes = {};

export default DashboardSurface;
