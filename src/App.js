import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#71CCFA",
      contrastText: "#fff"
    },
    secondary: {
      main: "#2D353C",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Abel', 'Open Sans', sans-serif"
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Main />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
