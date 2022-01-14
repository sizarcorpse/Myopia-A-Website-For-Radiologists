import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import ComponentsOverrides from "./overrides";
import typography from "./customs/typography";
import palette from "./customs/palette";

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      typography,
      palette,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
