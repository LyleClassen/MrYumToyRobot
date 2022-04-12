import React from 'react';
import { Container, Divider, Grid, Paper, Typography } from '@mui/material';
import AppBar from 'components/appBar/AppBar';
import TableTop from 'components/tableTop/TableTop';
import ActionSideBar from 'components/actionSideBar/ActionSideBar';

const Home = () => {
  return (
    <>
      <AppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90vh)' }}>
        <Grid container rowSpacing={4} columnSpacing={1}>
          <Grid item xs={12}>
            <Paper variant="outlined">
              <Container>
                <Typography variant="h6" color="primary">
                  Welcome To Mr Yum Toy Robot
                </Typography>
                <Divider />
                <p>
                  This application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5
                  units.
                </p>
                <p>You can control the robot by typing commands in the INPUT box below and hitting SUBMIT.</p>
                <p>
                  Instructions are as follows:
                  <ul>
                    <li>
                      <strong>PLACE X,Y,F</strong> - Places the robot on the board and the direction it is facing (eg.
                      PLACE 0,1,NORTH).
                    </li>
                    <li>
                      <strong>MOVE</strong> - Moves the robot one position in the direction it is facing.
                    </li>
                    <li>
                      <strong>LEFT</strong> - Turns the robot 90 degrees left.
                    </li>
                    <li>
                      <strong>RIGHT</strong> - Turns the robot 90 degrees right.
                    </li>
                    <li>
                      <strong>REPORT</strong> - Writes the current position and facing to the OUTPUT box.
                    </li>
                  </ul>
                </p>
              </Container>
            </Paper>
          </Grid>
          <Grid item xs={5} display="flex" justifyContent="center">
            <ActionSideBar />
          </Grid>
          <Grid item xs={7}>
            <TableTop />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
