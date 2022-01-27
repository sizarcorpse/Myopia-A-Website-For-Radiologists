import { cloneElement } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
const MpButtonStyled = styled(Box)(({ theme, variant, isLight }) => ({
  "& a": {
    appearance: "none",
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    height: theme.spacing(6),
    padding: theme.spacing(0, 2),
    fontSize: "1em",
    lineHeight: 1,
    textAlign: "center",
    textDecoration: "none",
    color: isLight ? theme.palette.primary.dark : theme.palette.primary.light,
    cursor: "pointer",
    border: 0,
    borderRadius: 6,
    backgroundImage: variant,
    boxShadow: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
    transition: `box-shadow .15s,transform .15s`,
    willChange: "box-shadow,transform",

    "&:hover": {
      boxShadow: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
      transform: "translateY(2px)",
    },
    "&:active": {
      boxShadow: `#2D3663 0 3px 7px inset`,
      transform: "translateY(2px)",
    },
    "& svg": {
      fontSize: "1.5em",
      fill: isLight ? theme.palette.primary.dark : theme.palette.primary.light,
    },
  },
}));

const buttonVariants = {
  lightish: `radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)`,
  light: `radial-gradient(100% 100% at 100% 0, #FCFCFD 0, #EDF1F6 100%)`,
  dark: `radial-gradient(100% 100% at 100% 0, #2D3663 0, #1A1B26 100%)`,
  darkish: `radial-gradient(100% 100% at 100% 0, #0383C7 0, #2D3663 100%)`,
};

const MPButton = (props) => {
  const { children, goto, variant, icon } = props;

  return (
    <MpButtonStyled
      variant={variant ? buttonVariants[variant] : buttonVariants["dark"]}
      isLight={variant === "light" ? true : false}
    >
      <Link href={goto}>
        <a>
          {children}
          {icon && cloneElement(icon, { ...props })}
        </a>
      </Link>
    </MpButtonStyled>
  );
};

MPButton.propTypes = {
  children: PropTypes.string.isRequired,
  goto: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["light", "lightish", "dark", "darkish"]),
  icon: PropTypes.object,
};

export default MPButton;
