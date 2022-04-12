import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import AppBar from 'components/appBar/AppBar';
import TableTop from 'components/tableTop/TableTop';
import ActionSideBar from 'components/actionSideBar/ActionSideBar';

const Home = () => {
  return (
    <>
      <AppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90vh)' }}>
        <Grid container rowSpacing={4} columnSpacing={1}>
          {/* <Grid item xs={12}>
            <Box sx={{ height: '120px', width: '100%', backgroundColor: 'green', borderRadius: '20px' }}>
              Drop File Here
            </Box>
          </Grid> */}
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
