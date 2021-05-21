import React, { Component } from "react";
import LineChart from "../charts/LineChart";
import RadarChart from "../charts/RadarChart";
import SankeyChart from "../charts/SankeyChart";
import { Container, Grid, Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Typography variant="h1">E-charts + React</Typography>
          <Typography variant="span">My cool playground</Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingTop: 80 }}
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadarChart />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SankeyChart />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
