import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link
        className={classes.link}
        color="inherit"
        to="https://material-ui.com/"
      >
        Daniel Byun
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
