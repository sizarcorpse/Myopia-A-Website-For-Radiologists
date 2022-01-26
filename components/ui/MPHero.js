import { forwardRef, cloneElement, Children, isValidElement } from "react";
import PropTypes from "prop-types";
import { Box, styled, Container } from "@mui/material";

const MPHeroStyled = styled(Box)(({ theme, bgIp, bgIm }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "60vh",
  backgroundImage: `linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(${bgIp})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center top",

  [theme.breakpoints.down("sm")]: {
    height: "calc(100vh - 50px)",
    backgroundImage: `linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(${bgIm})`,
  },

  "& .contents": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: theme.spacing(2),
  },
}));

const MPHero = forwardRef(
  (
    {
      children,
      backgroundImageForDesktop,
      backgroundImageForMobile,
      ...others
    },
    ref
  ) => {
    return (
      <MPHeroStyled
        ref={ref}
        bgIp={backgroundImageForDesktop}
        bgIm={backgroundImageForMobile}
      >
        <Container maxWidth="lg" className="contents">
          {Children.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement(child, { ...others });
            }
          })}
        </Container>
      </MPHeroStyled>
    );
  }
);

// MPHero.defaultProps = {
//   backgroundImageForPc: " rgba(3, 131, 199, 0.5)",
//   backgroundImageForMobile: "rgba(3, 131, 199, 0.5)",
// };

MPHero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImageForDesktop: PropTypes.string,
  backgroundImageForMobile: PropTypes.string,
};

export default MPHero;
