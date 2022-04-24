import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import {
  Box,
  styled,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Button,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import UpdateIcon from "@mui/icons-material/Update";
import PreviewIcon from "@mui/icons-material/Preview";

const MpDropdownMenuStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
}));

const MenuStyled = styled(Menu)(({ theme }) => ({
  elevation: 0,
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  marginTop: theme.spacing(1.5),
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(1),
  },
}));

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.dark,
  "& svg": {
    fill: theme.palette.primary.dark,
  },
}));

const ProfileButtonStyled = styled(Button)(({ theme }) => ({
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

const MpDropdownMenu = (props) => {
  const {
    user: { username, image, role },
    variant,
  } = props;

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <MpDropdownMenuStyled>
      {variant === "withButton" && (
        <ProfileButtonStyled
          onClick={handleDropdownOpen}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
        >
          Profile
        </ProfileButtonStyled>
      )}
      {variant === "withAvatar" && (
        <IconButton
          onClick={handleDropdownOpen}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="account menu"
        >
          <Avatar
            src={image}
            sx={{ width: 40, height: 40, border: "1px solid #0c2f56" }}
            alt={username}
          ></Avatar>
        </IconButton>
      )}

      <MenuStyled
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleDropdownClose}
        onClick={handleDropdownClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItemStyled component="li">
          <Avatar src={image} alt={"username"} />
          <Link href={`/u/${username}`}>
            <Typography variant="h8" fontWeight={500} component="p">
              {username}
            </Typography>
          </Link>
        </MenuItemStyled>

        <MenuItemStyled component="li">
          <ListItemIcon>
            <UpdateIcon fontSize="small" />
          </ListItemIcon>
          <Link href={`/u/${username}/update`}>
            <Typography variant="h8" fontWeight={500} component="p">
              Profile Setting
            </Typography>
          </Link>
        </MenuItemStyled>
        <Divider />
        {role === "admin" &&
          (router.pathname.startsWith("/dashboard") ? (
            <MenuItemStyled component="li">
              <ListItemIcon>
                <PreviewIcon fontSize="small" />
              </ListItemIcon>
              <Link href={`/`}>
                <Typography variant="h8" fontWeight={500} component="p">
                  Visit Homepage
                </Typography>
              </Link>
            </MenuItemStyled>
          ) : (
            <MenuItemStyled component="li">
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <Link href={`/dashboard`}>
                <Typography variant="h8" fontWeight={500} component="p">
                  Dashboard
                </Typography>
              </Link>
            </MenuItemStyled>
          ))}
        <MenuItemStyled onClick={() => signOut()} component="li">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography variant="h8" fontWeight={500} component="p">
            Logout
          </Typography>
        </MenuItemStyled>
      </MenuStyled>
    </MpDropdownMenuStyled>
  );
};

MpDropdownMenu.defaultProps = {
  variant: "withButton",
};

MpDropdownMenu.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(["withAvatar", "withButton"]),
};

export default MpDropdownMenu;
