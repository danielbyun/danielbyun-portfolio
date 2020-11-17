import React from "react";
import clsx from "clsx";
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";

const NAME = "Daniel Byun";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  text: {
    width: "100%",
  },
  avatarText: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      direction='column'
      justify='center'>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        wrap='wrap'>
        <Grid item container xs={5} sm={5} md={5} lg={5}>
          <Typography
            className={classes.text}
            variant='h2'
            align='center'
            style={{ letterSpacing: 5 }}>
            {NAME.toUpperCase()}
          </Typography>

          <Typography className={classes.text} align='center' variant='h6'>
            THE Full-Stack Web Developer
          </Typography>
          <Typography
            className={clsx(classes.text, classes.avatarText)}
            align='center'
            variant='h6'>
            <Avatar alt='Profile Pic' src='' className={classes.large} />
          </Typography>
          <Typography className={classes.text} variant='h6' align='center'>
            Welcome to my portfolio.
          </Typography>
          <Typography className={classes.text} align='center'>
            I'm a web developer with a music background.
          </Typography>
          <Typography className={classes.text} align='center'>
            In other words, I went to school for music but fell in love with
            programming after.
          </Typography>
          <Typography className={classes.text} align='center'>
            Yikes.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
