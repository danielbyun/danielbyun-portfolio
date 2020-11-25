import React, { useEffect, useState } from "react";
import clsx from "clsx";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";

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
    // backgroundColor: red[500],
  },
  body: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  chips: {
    margin: "1rem",
  },
  chip: {
    margin: 5,
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
    // console.log(projects);
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
            image={String(project.thumbnail)}
            title='Project Thumbnail'
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
              {project.nestedShortSummary ? "" : project.shortSummary}
            </Typography>

            <Grid className={classes.chips}>
              {project.tags.map((tag) => (
                <Chip
                  variant='outlined'
                  label={tag}
                  key={tag}
                  className={classes.chip}
                />
              ))}
              <br />
              <Tooltip placement='bottom' title='Go to demo'>
                <IconButton
                  aria-label='go to demo'
                  onClick={() => window.open(project.demoLink, "_blank")}>
                  {project.demoLink !== "" ? <SendIcon /> : undefined}
                </IconButton>
              </Tooltip>
            </Grid>
          </CardContent>
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
