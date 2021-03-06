import { useState, cloneElement, isValidElement, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, styled, MobileStepper, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const MpSliderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexGrow: 1,
  maxWidth: "100%",
  height: "auto",
  gap: theme.spacing(2),
  // padding: theme.spacing(2),
}));

const StepperStyled = styled(MobileStepper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  "& .MuiMobileStepper-dots": {
    display: "flex",
    gap: 6,
  },
  "& .MuiMobileStepper-dot": {
    transition: "all 250ms ease-out 0ms",
    transform: "scale(1)",
  },
  "& .MuiMobileStepper-dot.MuiMobileStepper-dotActive": {
    backgroundImage: `radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)`,
    transform: "scale(2)",
    transition: "all 500ms ease 0ms",
  },
}));
const MpSlider = autoPlay(SwipeableViews);

const MPSlider = (props) => {
  const { items, mpComponent, align, gutter } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(items.length);
  const theme = useTheme();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <MpSliderStyled className="MpSliderStyled">
      <MpSlider
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        animateTransitions
      >
        {items &&
          items.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                (align === "left" && "flex-start") ||
                (align === "center" && "center")
              }
              alignItems="center"
              width="100%"
              p={gutter ? gutter : 4}
            >
              {Math.abs(activeStep - index) <= 2
                ? isValidElement(mpComponent) &&
                  cloneElement(
                    mpComponent,
                    { item: item, mode: "playOnSlider" },
                    null
                  )
                : null}
            </Box>
          ))}
      </MpSlider>
      <StepperStyled
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </MpSliderStyled>
  );
};

MPSlider.defaultProps = {
  align: "left",
};

MPSlider.propTypes = {
  align: PropTypes.string,
  gutter: PropTypes.number,
  items: PropTypes.array.isRequired,
  mpComponent: PropTypes.element.isRequired,
};

export default MPSlider;
