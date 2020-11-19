import React from "react";
import { Copyright } from "./componentIndex";

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='subtitle2' color='textSecondary'>
          Hello - is it me you're looking for?
        </Typography>
        <Grid>
          <GitHubIcon
            color='action'
            fontSize='small'
            style={{ margin: "5 0.5rem 0 0" }}
          />
          <LinkedInIcon color='action' fontSize='small' />
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
