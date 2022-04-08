import React from 'react';
import { Box, Button, Container, Grid, MenuItem, Select, Stack, TextField } from '@mui/material';
import AppBar from 'components/appBar/AppBar';

const Home = () => (
  <>
    <AppBar />
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90vh)' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ height: '120px', width: '100%', backgroundColor: 'green', borderRadius: '20px' }}>
            Drop File Here
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="primary">
                Place
              </Button>
              <TextField id="outlined-basic" label="X" variant="outlined" />
              <TextField id="outlined-basic" label="Y" variant="outlined" />
              <Select label="Facing">
                <MenuItem value="NORTH">NORTH</MenuItem>
                <MenuItem value="EAST">EAST</MenuItem>
                <MenuItem value="SOUTH">SOUTH</MenuItem>
                <MenuItem value="WEST">WEST</MenuItem>
              </Select>
            </Stack>
            <Button fullWidth variant="contained" color="primary">
              Move
            </Button>
            <Button fullWidth variant="contained" color="primary">
              Left
            </Button>
            <Button fullWidth variant="contained" color="primary">
              Right
            </Button>
            <Button fullWidth variant="outlined" color="primary">
              Report
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default Home;
