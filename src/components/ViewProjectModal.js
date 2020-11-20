import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Divider,
  IconButton,
  makeStyles,
  Modal,
  Tooltip,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import clsx from "clsx";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {
  covidAssets,
  devConnectorAssets,
  ecommerceAssets,
  chatAssets,
  ppmToolAssets,
  materialAssets,
  flowerStoreAssets,
} from "./utils/assets";

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
    margin: "1rem auto",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
    maxHeight: "80%",
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
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = () => {
    expanded === project.id ? setExpanded(null) : setExpanded(project.id);
  };

  useEffect(() => {
    console.log(
      covidAssets,
      devConnectorAssets,
      ecommerceAssets,
      chatAssets,
      ppmToolAssets,
      materialAssets,
      flowerStoreAssets
    );

    Object.values(covidAssets).forEach((value) => {
      console.log(value.default);
    });
  }, []);

  return (
    <Modal
      className={classes.modal}
      open={open === project.id}
      onClose={handleClose}
      disableAutoFocus>
      <div style={modalStyle} className={classes.paper}>
        <Typography
          variant='h6'
          color='textPrimary'
          style={{ width: "100%", textAlign: "center" }}>
          {project.title}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant='subtitle2'>{project.shortSummary}</Typography>
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "Flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid red",
            margin: "1rem auto",
          }}>
          CAROUSEL
        </div>

        <Tooltip placement='bottom' title='Go to demo'>
          {project.demoLink !== "" ? (
            <IconButton
              component={Link}
              to={project.demoLink}
              aria-label='go to demo'>
              <SendIcon />
            </IconButton>
          ) : (
            <></>
          )}
        </Tooltip>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded === project.id,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon />
        </IconButton>
        <Divider className={classes.divider} />
        <Collapse in={expanded === project.id} timeout='auto' unmountOnExit>
          <Typography variant='subtitle2'>{project.shortSummary}</Typography>
        </Collapse>
      </div>
    </Modal>
  );
};

export default ViewProjectModal;
