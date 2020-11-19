import React, { useEffect, useState } from "react";
import clsx from "clsx";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";

import { projects } from "./projects/ProjectList";
import ViewProjectModal from "./ViewProjectModal";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 500px)",
    gridGap: "1rem",
    justifyContent: "center",
    alignContent: "flex-start",
    margin: "1rem auto",
    textAlign: "center",
  },
  root: {
    maxWidth: 500,
    margin: "1rem 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
  body: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Web = () => {
  const classes = useStyles();
  const [currentProject, setCurrentProject] = useState({});
  const [open, setOpen] = useState(null);

  const onChildClick = () => {
    setOpen(null);
  };

  useEffect(() => {
    projects.forEach((project) => {
      if (project.tags) {
        if (project.tags.length > 0) {
          console.log(project.tags);
        }
      }
    });
  }, []);

  return (
    <Grid
      item
      container
      justify='space-around'
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className={classes.container}>
      {projects.map((project) => (
        <Card className={classes.root} key={project.id}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                {project.title !== undefined
                  ? project.title.substring(0, 1)
                  : ""}
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={project.title}
          />
          <CardMedia
            className={clsx([classes.media, classes.body])}
            image='/static/images/cards/paella.jpg'
            title='Paella dish'
            onClick={() => {
              setOpen(project.id);
              setCurrentProject(project);
            }}
          />
          <CardContent>
            <Typography variant='body1' color='textPrimary' component='p'>
              Short summary:
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {project.shortSummary}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Tooltip placement='bottom' title='Go to demo'>
              <IconButton
                aria-label='go to demo'
                onClick={() => window.open(project.demoLink, "_blank")}>
                {project.demoLink !== "" ? <SendIcon /> : undefined}
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      ))}
      <ViewProjectModal
        project={currentProject}
        open={open}
        handleClose={onChildClick}
      />
    </Grid>
  );
};

export default Web;
