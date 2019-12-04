/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { useStyles } from './EditFormUi';

export const EditForm = (props) => {
  const {
    inputName,
    inputPrice,
    inputCreate,
    inputText,
    inputSize,
    handleInputChange,
    handleUpdateProduct,
  } = props;

  const classes = useStyles();

  return (
    <form>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            label="Name"
            type="text"
            className={classes.textField}
            value={inputName}
            name="inputName"
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            label="Price"
            type="number"
            className={classes.textField}
            value={inputPrice}
            name="inputPrice"
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            className={classes.textField}
            value={inputCreate}
            name="inputCreate"
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            label="About Display"
            type="textArea"
            className={classes.textField}
            value={inputText}
            name="inputText"
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            label="Display Size"
            type="number"
            className={classes.textField}
            value={inputSize}
            name="inputSize"
            margin="normal"
            onChange={handleInputChange}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            onClick={handleUpdateProduct}
            className={classes.button}
          >
            Change product
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
