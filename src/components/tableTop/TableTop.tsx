import React, { useEffect, useRef, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Layer, Line, Stage } from 'react-konva';
import RobotImage from './RobotImage';

const TableTop = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState(400);
  const [spacing, setSpacing] = useState(400 / 5);

  useEffect(() => {
    const newStateSize = tableRef?.current?.clientWidth || 400;

    setStageSize(newStateSize);
    setSpacing(newStateSize / 5);
  }, [tableRef]);

  return (
    <Grid container>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h3" color="primary">
          North
        </Typography>
      </Grid>
      <Grid item xs={2} alignItems="center" display="flex" justifyContent="flex-end">
        <Typography
          variant="h3"
          color="primary"
          sx={{
            transform: 'rotate(-90deg)',
          }}
        >
          West
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Container
          ref={tableRef}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <Stage width={stageSize} height={stageSize}>
            <Layer>
              <Line points={[0, 0, 0, stageSize]} stroke="black" />
              <Line points={[spacing, 0, spacing, stageSize]} stroke="black" />
              <Line points={[spacing * 2, 0, spacing * 2, stageSize]} stroke="black" />
              <Line points={[spacing * 3, 0, spacing * 3, stageSize]} stroke="black" />
              <Line points={[spacing * 4, 0, spacing * 4, stageSize]} stroke="black" />
              <Line points={[stageSize, 0, stageSize, stageSize]} stroke="black" />
              <Line points={[0, 0, stageSize, 0]} stroke="black" />
              <Line points={[0, spacing, stageSize, spacing]} stroke="black" />
              <Line points={[0, spacing * 2, stageSize, spacing * 2]} stroke="black" />
              <Line points={[0, spacing * 3, stageSize, spacing * 3]} stroke="black" />
              <Line points={[0, spacing * 4, stageSize, spacing * 4]} stroke="black" />
              <Line points={[0, stageSize, stageSize, stageSize]} stroke="black" />
            </Layer>
            <Layer>
              <RobotImage x={0} y={0} size={spacing} />
            </Layer>
          </Stage>
        </Container>
      </Grid>
      <Grid item xs={2} alignItems="center" display="flex">
        <Typography
          variant="h3"
          color="primary"
          sx={{
            transform: 'rotate(90deg)',
          }}
        >
          East
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h3" color="primary">
          South
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TableTop;
