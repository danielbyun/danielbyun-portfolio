import React, { useState } from "react";

import {
  Divider,
  IconButton,
  makeStyles,
  Modal,
  Tooltip,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "7px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // margin: "0 auto",
  },
  divider: {
    width: "100%",
    // margin: "1rem auto",
  },
}));

const getModalStyle = () => {
  const top = "50";
  const left = "50";

  return {
    position: "absolute",
    margin: "1rem",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: "600px",
    height: "80%",
    maxWidth: "100%",
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  };
};

const ViewProjectModal = ({ project, open, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      disableAutoFocus
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography
          variant="h6"
          color="textPrimary"
          style={{ width: "100%", textAlign: "center" }}
        >
          {project.title}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">{project.shortSummary}</Typography>
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "Flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid red",
            margin: "1rem auto",
          }}
        >
          CAROUSEL
        </div>
        <Typography variant="subtitle2">{project.shortSummary}</Typography>
        <Divider className={classes.divider} />
        <Tooltip placement="bottom" title="Go to demo">
          <IconButton aria-label="go to demo">
            {project.link !== "" ? <SendIcon /> : undefined}
          </IconButton>
        </Tooltip>
      </div>
    </Modal>
  );
};

export default ViewProjectModal;
