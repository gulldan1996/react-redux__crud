import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { useStyles } from './AddFormUi';

export function AddForm(props) {
  const {
    inputName,
    inputPrice,
    inputCreate,
    inputText,
    inputSize,
    handleInputChange,
    handleSubmit,
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
            onClick={handleSubmit}
            className={classes.button}
          >
            Add product
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

AddForm.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputPrice: PropTypes.string.isRequired,
  inputCreate: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  inputSize: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};