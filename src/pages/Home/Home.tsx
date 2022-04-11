import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import AppBar from 'components/appBar/AppBar';
import TableTop from 'components/tableTop/TableTop';
import ActionSideBar from 'components/actionSideBar/ActionSideBar';

const Home = () => {
  return (
    <>
      <AppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90vh)' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box sx={{ height: '120px', width: '100%', backgroundColor: 'green', borderRadius: '20px' }}>
              Drop File Here
            </Box>
          </Grid>
          <Grid item xs={4} display="flex" alignItems="center">
            <ActionSideBar />
          </Grid>
          <Grid item xs={8}>
            <TableTop />
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined">OUTPUT SECTION</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
