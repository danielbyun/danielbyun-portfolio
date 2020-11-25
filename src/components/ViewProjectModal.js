import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Collapse,
  Divider,
  fade,
  IconButton,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

import clsx from "clsx";
import _ from "lodash";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { grey } from "@material-ui/core/colors";
import { getExtension } from "./utils/assets";
import ReactPlayer from "react-player";

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
  },
  media: {
    height: 0,
    // paddingTop: "56.25%", // 16:9
    width: "100%",
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
  demoButton: {
    margin: "1rem auto 0 auto",
  },
  arrowStyles: {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 50,
    cursor: "pointer",
    backgroundColor: fade(grey[400], 0.5),

    "&:hover": {
      backgroundColor: grey[500],
    },
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
    width: "800px",
    height: "600px",
    maxHeight: "80%",
    maxWidth: "100%",
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
  };
};

const ViewProjectModal = ({ project, open, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [expanded, setExpanded] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const currentProjectImages = [];

    setExpanded(project.id);

    if (!_.isEmpty(project.images)) {
      Object.values(project.images).forEach((value) => {
        Object.values(value).forEach((v) => {
          currentProjectImages.push(v.default);
          getExtension(v.default);
          setImages(currentProjectImages);
        });
      });
    } else {
      setImages([]);
    }
  }, [project]);

  const handleExpandClick = () => {
    expanded === project.id ? setExpanded(null) : setExpanded(project.id);
  };

  const YoutubeSlide = ({ url, isSelected }) => {
    console.log(isSelected);
    return <ReactPlayer width='100%' url={url} playing={true} loop={true} />;
  };

  // const customRenderItem = (item, props) => {
  //   <item.props.children.type {...item.props.children.props} {...props} />;
  // };

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

        <Button
          className={classes.demoButton}
          variant='outlined'
          component={Link}
          to={project.demoLink}
          disabled={project.demoLink === ""}
          aria-label='go to demo'>
          Go to demo
        </Button>

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
          <Carousel
            // renderItem={customRenderItem}
            infiniteLoop={true}
            dynamicHeight={true}
            className={classes.media}
            style={{ width: "300px" }}
            showThumbs={true}
            statusFormatter={(current, total) => (
              <Typography
                variant='body2'
                component='span'
                style={{
                  marginRight: "0.5rem",
                }}>{`${current} / ${total} Items`}</Typography>
            )}
            useKeyboardArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <IconButton
                  size='medium'
                  onClick={onClickHandler}
                  style={{ left: 15 }}
                  className={classes.arrowStyles}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <IconButton
                  size='medium'
                  onClick={onClickHandler}
                  style={{ right: 15 }}
                  className={classes.arrowStyles}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              )
            }>
            {images.map((image) => (
              <Fragment key={image}>
                {getExtension(image) === "png" ? (
                  <img
                    src={image}
                    alt={"Project Item"}
                    style={{ width: "100%" }}
                  />
                ) : getExtension(image) === "gif" ? (
                  <img
                    key={image}
                    src={image}
                    alt={"Project Item"}
                    style={{ width: "100%" }}
                  />
                ) : getExtension(image) === "mov" ? (
                  <YoutubeSlide key={image} url={image} />
                ) : undefined}
              </Fragment>
            ))}
          </Carousel>
        </Collapse>
      </div>
    </Modal>
  );
};

export default ViewProjectModal;
