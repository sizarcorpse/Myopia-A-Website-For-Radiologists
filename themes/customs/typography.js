function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, sm, md, lg, xl }) {
  return {
    "@media (min-width:0px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1280px)": {
      fontSize: pxToRem(lg),
    },
    "@media (min-width:1536px)": {
      fontSize: pxToRem(xl),
    },
  };
}

const FONT_PRIMARY = "Poppins, sans-serif";
const FONT_SECONDARY = "Jost, sans-serif";
const FONT_TERTIARY = "Alata, sans-serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: pxToRem(100),
    ...responsiveFontSizes({ xs: 64, sm: 72, md: 80, lg: 100, xl: 100 }),
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: pxToRem(64),
    ...responsiveFontSizes({ xs: 36, sm: 40, md: 48, lg: 64, xl: 64 }),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ xs: 32, sm: 36, md: 40, lg: 48, xl: 48 }),
  },
  h4: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 24, lg: 28, xl: 32 }),
  },

  h5: {
    fontFamily: FONT_TERTIARY,
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 22, lg: 24, xl: 24 }),
  },
  h6: {
    fontFamily: FONT_TERTIARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ xs: 18, sm: 18, md: 20, lg: 22, xl: 22 }),
  },
  h7: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: pxToRem(21),
    ...responsiveFontSizes({ xs: 18, sm: 18, md: 20, lg: 21, xl: 21 }),
  },
  h8: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 16, lg: 16, xl: 16 }),
  },
  h9: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 24, lg: 28, xl: 28 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  body1: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 1.7,
    fontWeight: 400,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 16, lg: 16, xl: 16 }),
  },
};

export default typography;
