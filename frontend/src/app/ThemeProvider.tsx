"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true
  }
});

const AppThemeProvider = (props: any) => {
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {props.children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
