export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthLg": {
            [theme.breakpoints.down("xs")]: {
              padding: theme.spacing(4, 2),
            },
            [theme.breakpoints.up("xs")]: {
              padding: theme.spacing(6, 2),
            },
            [theme.breakpoints.up("sm")]: {
              padding: theme.spacing(8, 2),
            },
            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(10, 2),
            },
            [theme.breakpoints.up("lg")]: {
              padding: theme.spacing(12, 2),
            },
          },
          "&.MuiContainer-maxWidthXs": {
            maxWidth: 1200,
            [theme.breakpoints.down("xs")]: {
              padding: theme.spacing(0, 2),
            },
            [theme.breakpoints.up("xs")]: {
              padding: theme.spacing(0, 2),
            },
            [theme.breakpoints.up("sm")]: {
              padding: theme.spacing(0, 2),
            },
            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(0, 2),
            },
            [theme.breakpoints.up("lg")]: {
              padding: theme.spacing(0, 2),
            },
          },
        },
      },
    },
  };
}
