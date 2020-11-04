import React from "react";

import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const DrawerList = ({ open, handleClose }) => {
  const history = useHistory();

  return (
    <Drawer open={open} onClose={handleClose}>
      <List>
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ margin: "1rem" }}
        >
          Daniel Byun
        </Typography>
        <Divider />
        <ListItem>
          <Button fullWidth onClick={() => history.push("/web")}>
            Web
          </Button>
        </ListItem>
        <ListItem>
          <Button fullWidth onClick={() => history.push("/music")}>
            Music
          </Button>
        </ListItem>
        <ListItem>
          <Button fullWidth onClick={() => history.push("/about")}>
            About
          </Button>
        </ListItem>
        <ListItem>
          <Button fullWidth onClick={() => history.push("/resume")}>
            Resume
          </Button>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default DrawerList;
