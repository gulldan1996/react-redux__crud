/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { deleteProduct, selectLink } from '../../redux/actions';
import { getProduct } from '../../redux/selectors';
import { useStyles } from './ListOfProductsUi';

const ListOfProducts = (props) => {
  const classes = useStyles();
  const {
    product,
    deleteProduct,
    selectLink,
  } = props;

  return (
    <div className={classes.container}>
      {product.length !== 0 ? product.map((item) => {
        const {
          name,
          id,
        } = item;

        return (
          <div key={id}>
            <Card className={classes.card}>
              <CardContent className={classes.title}>
                <Typography>
                  {name}
                </Typography>
              </CardContent>
              <Button
                onClick={() => deleteProduct(id)}
              >
                Delete
              </Button>
              <Button
                component={Link}
                to={`EditProduct/${id}`}
                onClick={() => selectLink(id)}
              >
                  Edit
              </Button>
              <Button
                component={Link}
                to={`ViewProduct/${id}`}
                onClick={() => selectLink(id)}
              >
                  View Detail
              </Button>
            </Card>
          </div>
        );
      }) : (
        <Card>
          <CardContent className={classes.title}>
            <Typography>
              You have not product
            </Typography>
          </CardContent>
        </Card>
      )
      }
    </div>
  );
};

let mapStateToProps = state => ({
  product: getProduct(state),
});

let mapDispatchToProps = dispatch => ({
  deleteProduct: id => dispatch(deleteProduct(id)),
  selectLink: id => dispatch(selectLink(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfProducts);
