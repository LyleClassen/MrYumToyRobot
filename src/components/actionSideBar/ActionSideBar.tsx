import React from 'react';
import { Button, Divider, Grid, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import useActionSideBar from './controller';

const renderRow =
  (reportList: Array<string>) =>
  // eslint-disable-next-line react/display-name
  ({ index, style }: { index: number; style: React.CSSProperties }) =>
    (
      <ListItem style={style} key={`${index}`}>
        <ListItemText primary={reportList[index]} />
      </ListItem>
    );

const ActionSideBar = () => {
  const { reportList, outputRef, inputRef, initialValues, validationSchema, onSubmit } = useActionSideBar();
  return (
    <Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs>
                <Field
                  component={TextField}
                  name="input"
                  label="Input"
                  variant="outlined"
                  color="primary"
                  placeholder="Input"
                  inputProps={{ style: { textTransform: 'uppercase' }, ref: inputRef }}
                  sx={{ width: '100%' }}
                  helperText=" "
                  autoFocus
                  data-cy="input-box"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  disabled={isSubmitting || !values.input}
                  data-cy="submit_button"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Paper variant="outlined" sx={{ width: '100%', height: '100%', p: 1 }}>
        <Stack sx={{ height: '90%' }} spacing={1}>
          <Typography variant="h6">OUTPUT:</Typography>
          <Divider />
          <AutoSizer>
            {({ height, width }: { height: number; width: number }) => (
              <List
                className="output-list"
                ref={outputRef}
                height={height}
                width={width}
                itemSize={20}
                itemCount={reportList.length}
              >
                {renderRow(reportList as Array<string>)}
              </List>
            )}
          </AutoSizer>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ActionSideBar;
