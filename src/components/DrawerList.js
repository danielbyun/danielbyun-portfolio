import React from "react";

import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  homeLink: {
    margin: "1rem",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
});

const DrawerList = ({ open, handleClose }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Drawer open={open} onClose={handleClose}>
      <List>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.homeLink}
          onClick={() => {
            handleClose();
            history.push("/");
          }}
        >
          Daniel Byun
        </Typography>
        <Divider />
        <ListItem>
          <Button
            fullWidth
            onClick={() => {
              handleClose();
              history.push("/web");
            }}
          >
            Web
          </Button>
        </ListItem>
        <ListItem>
          <Button
            fullWidth
            onClick={() => {
              handleClose();
              history.push("/music");
            }}
          >
            Music
          </Button>
        </ListItem>
        <ListItem>
          <Button
            fullWidth
            onClick={() => {
              handleClose();
              history.push("/about");
            }}
          >
            About
          </Button>
        </ListItem>
        <ListItem>
          <Button
            fullWidth
            onClick={() => {
              handleClose();
              history.push("/resume");
            }}
          >
            Resume
          </Button>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default DrawerList;
