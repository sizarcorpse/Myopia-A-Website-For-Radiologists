function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, sm, md, lg }) {
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
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "Lexend, sans-serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    lineHeight: 1.25,
    fontSize: pxToRem(80),
    ...responsiveFontSizes({ xs: 36, sm: 40, md: 48, lg: 64 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ xs: 32, sm: 36, md: 40, lg: 48 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.4,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ xs: 24, sm: 24, md: 28, lg: 32 }),
  },
  h4: {
    fontWeight: 300,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 18, sm: 20, md: 22, lg: 24 }),
  },
  h5: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 16, sm: 18, md: 18, lg: 18 }),
  },
  h6: {
    fontWeight: 300,
    lineHeight: 28 / 18,
    fontSize: pxToRem(21),
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
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
    lineHeight: 1.7,
    fontWeight: 300,
    fontSize: pxToRem(18),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
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
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
};

export default typography;
