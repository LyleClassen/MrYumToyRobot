import React from 'react';
import { Button, Stack, TextField, Select, MenuItem } from '@mui/material';
import useActionSideBar from './controller';

const ActionSideBar = () => {
  const { isPlaced, onPlace } = useActionSideBar();
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" color="primary" onClick={onPlace}>
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
      <Button fullWidth variant="contained" color="primary" disabled={!isPlaced}>
        Move
      </Button>
      <Button fullWidth variant="contained" color="primary" disabled={!isPlaced}>
        Left
      </Button>
      <Button fullWidth variant="contained" color="primary" disabled={!isPlaced}>
        Right
      </Button>
      <Button fullWidth variant="outlined" color="primary" disabled={!isPlaced}>
        Report
      </Button>
    </Stack>
  );
};

export default ActionSideBar;
