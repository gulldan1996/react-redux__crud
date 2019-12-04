/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './ViewProductUi';
import { getAboutProduct } from '../../redux/selectors';

const ViewProduct = ({ aboutProduct }) => {
  const classes = useStyles();

  if (!aboutProduct) {
    return <Redirect to="/" />;
  }

  const {
    name,
    price,
    createData,
    description,
  } = aboutProduct;
  const {
    text,
    size,
  } = description;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.content}>
          <span>Name product:</span>
          <span>
            {name}
          </span>
        </Typography>
        <Typography className={classes.content}>
          <span>Price:</span>
          <span>
            {price}
            $
          </span>
        </Typography>
        <Typography className={classes.content}>
          <span>Date to get product</span>
          <span>
            {createData}
          </span>
        </Typography>
        <Typography className={classes.content}>
          <span>About Display</span>
          <span>{text}</span>
        </Typography>
        <Typography className={classes.content}>
          <span>Display Size:</span>
          <span>
            {size}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to="/"
          type="button"
        >
        Go to List of Product
        </Button>
      </CardActions>
    </Card>
  );
};

let mapStateToProps = state => ({
  aboutProduct: getAboutProduct(state),
});

export default connect(mapStateToProps)(ViewProduct);
