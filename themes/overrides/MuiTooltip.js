export default function MuiTooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: theme.typography.subtitle1.fontSize,
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.main,
          borderRadius: 4,
        },
      },
    },
  };
}
