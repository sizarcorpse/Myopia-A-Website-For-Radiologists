import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import { Box, styled, Typography } from "@mui/material";

const MpIconBoxStyled = styled(Box)(({ theme, mode, isActive }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: mode === "playOnSlider" ? "center" : "flex-start",
  flexFlow: 1,
  gap: theme.spacing(2.5),
  padding: theme.spacing(4, 4),
  width:
    mode === "playOnSlider" ? "100%" : mode === "single" ? "160px" : "214px",
  height:
    mode === "playOnSlider" ? "220px" : mode === "single" ? "162px" : "196px",
  cursor: "pointer",
  border: 0,
  borderRadius: 6,
  backgroundImage: `radial-gradient(100% 100% at 100% 0, #FCFCFD 0, #FCFCFD 100%)`,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",

  transition: "box-shadow .15s, transform .15s",
  willChange: "box-shadow, transform",

  [theme.breakpoints.up("sm")]: {
    "&:hover": {
      backgroundImage: `radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)`,
      boxShadow: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
      transform: "translateY(2px)",
    },
  },

  "& a": {
    textDecoration: "none",
    textAlign: "center",
  },
  "& .title": {
    textAlign: "center",
  },
}));

const MPIconBox = (props) => {
  const {
    item: { icon, title, linkTo },
    mode,
  } = props;

  return (
    <MpIconBoxStyled mode={mode ? mode : undefined}>
      <Link href={linkTo}>
        <a>
          <Image
            src={icon}
            alt={title}
            width={mode === "single" ? 45 : 69}
            height={mode === "single" ? 45 : 69}
          />
          <Typography
            variant={mode === "single" ? "body2" : "body1"}
            color="primary.dark"
            className="title"
          >
            {title}
          </Typography>
        </a>
      </Link>
    </MpIconBoxStyled>
  );
};

MPIconBox.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    linkTo: PropTypes.string,
  }),
  mode: PropTypes.string,
};

export default MPIconBox;
