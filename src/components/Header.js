import React, { useState } from "react";

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
import { DrawerList } from "./componentIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleClose = () => {
    setIsDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpened(!isDrawerOpened);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <DrawerList open={isDrawerOpened} handleClose={handleClose} />
      </AppBar>
    </div>
  );
};

export default Header;
