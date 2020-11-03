import React from "react";

import {
  makeStyles,
  AppBar,
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Popover,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return <div className={classes.root}>Header</div>;
};

export default Header;
