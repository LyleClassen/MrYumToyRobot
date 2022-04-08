import React from 'react';
import { Container } from '@mui/material';
import { Circle, Layer, Stage } from 'react-konva';

const TableTop = () => (
  <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Stage width="400px" height="400px">
      <Layer>
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
  </Container>
);

export default TableTop;
