import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
});

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant='subtitle2' color='textSecondary'>
      {"Copyright © "}
      <Typography
        component='span'
        variant='subtitle2'
        className={classes.link}
        color='inherit'
        onClick={() =>
          window.open("https://www.linkedin.com/in/danielhbyun/", "_blank")
        }>
        Daniel Byun
      </Typography>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
