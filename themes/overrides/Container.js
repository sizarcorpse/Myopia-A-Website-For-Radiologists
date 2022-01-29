export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1280,
            [theme.breakpoints.down("xs")]: {
              padding: theme.spacing(4, 3),
            },
            [theme.breakpoints.up("xs")]: {
              padding: theme.spacing(6, 3),
            },
            [theme.breakpoints.up("sm")]: {
              padding: theme.spacing(8, 4),
            },
            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(10, 4),
            },
            [theme.breakpoints.up("lg")]: {
              padding: theme.spacing(12, 4),
            },
          },
          "&.MuiContainer-maxWidthXs": {
            maxWidth: 1280,
            [theme.breakpoints.down("xs")]: {
              padding: theme.spacing(0, 3),
            },
            [theme.breakpoints.up("xs")]: {
              padding: theme.spacing(0, 3),
            },
            [theme.breakpoints.up("sm")]: {
              padding: theme.spacing(0, 4),
            },
            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(0, 4),
            },
            [theme.breakpoints.up("lg")]: {
              padding: theme.spacing(0, 4),
            },
          },
        },
      },
    },
  };
}
