import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline, useMediaQuery, createTheme  } from "@mui/material";
import Router from "./Router";

import "Utils/pick";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      ...(prefersDarkMode
        ? {
          background: {
            default: "#202124",
            paper: "#35363a"
          },
          divider: "#434446"
        }
        : {
          background: {
            default: "#dee1e6",
            paper: "#fff"
          },
          divider: "#c4c8cd"
        }
      )
    },
    shape: {
      borderRadius: 9
    },
    components: {
      MuiCard: {
        defaultProps: {
          variant: "outlined"
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router/>
    </ThemeProvider>
  );
}


const rootElement = document.getElementById("root");

if(!rootElement)
  throw new Error("Failed to find the root element");

const Root = ReactDOM.createRoot(rootElement);

Root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);