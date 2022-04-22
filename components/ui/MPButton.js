import { cloneElement } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Box, styled, Button } from "@mui/material";

const buttonVariants = {
  lightish: `radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)`,
  light: `radial-gradient(100% 100% at 100% 0, #FCFCFD 0, #EDF1F6 100%)`,
  dark: `radial-gradient(100% 100% at 100% 0, #2D3663 0, #1A1B26 100%)`,
  darkish: `radial-gradient(100% 100% at 100% 0, #0383C7 0, #2D3663 100%)`,
  published: `radial-gradient(100% 100% at 100% 0, #26A69A 0, #009688 100%)`,
  reddish: `radial-gradient(100% 100% at 100% 0, #F44336 0, #E53935  100%)`,
};
const buttonBoxShadows = {
  lightish: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
  light: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
  dark: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
  darkish: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
  published: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(0, 77, 64, .3) 0 7px 13px -3px,rgba(0, 77, 64, .5) 0 -3px 0 inset`,
  reddish: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(198, 40, 40, .3) 0 7px 13px -3px,rgba(198, 40, 40, .5) 0 -3px 0 inset`,
};
const buttonHoverShadows = {
  lightish: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
  light: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
  dark: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
  darkish: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
  published: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(38, 166, 154, .3) 0 7px 13px -3px, #004D40 0 -3px 0 inset`,
  reddish: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(38, 166, 154, .3) 0 7px 13px -3px, #B71C1C 0 -3px 0 inset`,
};

const MpButtonStyled = styled(Box)(({ theme, variant, isLight, bs, bx }) => ({
  "& a,.handlerButton": {
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
    boxShadow: bx,
    transition: `box-shadow .15s,transform .15s`,
    willChange: "box-shadow,transform",

    "&:hover": {
      boxShadow: bs,
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

const MPButton = (props) => {
  const { children, goto, variant, icon, handle, disabled, type } = props;

  return (
    <MpButtonStyled
      bs={buttonHoverShadows[variant]}
      bx={buttonBoxShadows[variant]}
      variant={variant ? buttonVariants[variant] : buttonVariants["dark"]}
      isLight={variant === "light" ? true : false}
    >
      {goto && (
        <Link href={goto}>
          <a>
            {children}
            {icon && cloneElement(icon, { ...props })}
          </a>
        </Link>
      )}
      {handle && (
        <Button
          onClick={handle}
          className="handlerButton"
          endIcon={icon && cloneElement(icon)}
          disabled={disabled}
        >
          {children}
        </Button>
      )}
      {type === "submit" && (
        <Button
          type="submit"
          className="handlerButton"
          endIcon={icon && cloneElement(icon)}
          disabled={disabled}
        >
          {children}
        </Button>
      )}
    </MpButtonStyled>
  );
};

MPButton.propTypes = {
  children: PropTypes.string.isRequired,
  goto: PropTypes.string,
  handle: PropTypes.func,
  variant: PropTypes.oneOf([
    "light",
    "lightish",
    "dark",
    "darkish",
    "published",
    "reddish",
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  type: PropTypes.string,
};

export default MPButton;
