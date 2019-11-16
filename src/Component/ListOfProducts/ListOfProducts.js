import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListOfProducts(props) {
  const classes = useStyles();
  const {
    product,
    deleteProduct,
    selectLink,
  } = props;

  return (
    <>
      {product.map((item, i) => {
        const {
          name,
          id,
        } = item;

        return (
          <div className={classes.container} key={id}>
            <Card className={classes.card}>
              <CardContent className={classes.title}>
                <Typography>
                  {name}
                </Typography>
              </CardContent>
              <Button onClick={() => deleteProduct(id)}>Delete</Button>
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
      })}
    </>
  );
}

ListOfProducts.propTypes = {
  product: PropTypes.string,
  deleteProduct: PropTypes.func.isRequired,
  selectLink: PropTypes.func.isRequired,
};

ListOfProducts.defaultProps = {
  product: {},
};
