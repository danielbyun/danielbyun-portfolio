import React, { useState } from "react";

import {
  makeStyles,
  AppBar,
  // Button,
  // Divider,
  // Grid,
  IconButton,
  // MenuItem,
  // Popover,
  // Switch,
  Toolbar,
  Fab,
  // Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import SettingsIcon from "@material-ui/icons/Settings";
import { DrawerList } from "./componentIndex";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
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
      <AppBar position='static' color='default'>
        <Toolbar id='back-to-top-anchor'>
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <DrawerList open={isDrawerOpened} handleClose={handleClose} />
      </AppBar>
      <ScrollTop {...props}>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Header;
