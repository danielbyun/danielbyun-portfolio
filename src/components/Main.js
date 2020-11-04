import React from "react";
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";

const NAME = "Daniel Byun";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} sm={12} md={12} lg={12} direction="column">
      <Typography variant="h2" style={{ letterSpacing: 5 }}>
        {NAME.toUpperCase()}
      </Typography>
      <Typography variant="h6">THE Full-Stack Web Developer</Typography>
      <Avatar alt="Profile Pic" src="" className={classes.large} />
      <Grid item container xs={5} sm={5} md={5} lg={5}>
        <Typography>Welcome to my portfolio.</Typography>
        <Typography>I'm a web developer with a music background.</Typography>
        <Typography>
          In other words, I went to school for music but fell in love with
          programming after.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Main;
