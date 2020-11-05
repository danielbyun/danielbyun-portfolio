import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Particles from "react-particles-js";

import {
  Container,
  createMuiTheme,
  CssBaseline,
  Fab,
  makeStyles,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import {
  About,
  ScrollTop,
  Footer,
  Header,
  Main,
  Web,
  Music,
  Resume,
} from "./components/componentIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
  },
}));

const App = (props) => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: -1,
          }}
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 60,
                  density: {
                    enable: true,
                    value_area: 1500,
                  },
                },
                line_linked: {
                  enable: true,
                  opacity: 0.02,
                },
                move: {
                  direction: "right",
                  speed: 0.05,
                },
                size: {
                  value: 1,
                },
                opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                  },
                },
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  push: {
                    particles_nb: 1,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch style={{ zIndex: 9999 }}>
          <Route exact path="/" component={Main} />
          <Route exact path="/web" component={Web} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Switch>

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
