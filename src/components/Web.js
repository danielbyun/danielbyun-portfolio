import { Card, Grid } from "@material-ui/core";
import React from "react";

const projects = ["test1", "test2", "test3", "tes4"];

const Web = () => {
  return (
    <Grid item container xs={12} sm={12} md={12} lg={12}>
      {projects.map((project) => (
        <Card>yo</Card>
      ))}
    </Grid>
  );
};

export default Web;
