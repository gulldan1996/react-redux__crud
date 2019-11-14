import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 350,
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
  const { product, deleteProduct, selectLink } = props;
  return (
    <>
    {product.map((item, i) => {
      const {
        name,
        id,
      } = item;
      return (
        <Card className={classes.card} key={i}>
          <CardContent className={classes.title}>
            <Typography>
              {name}
            </Typography>
          </CardContent>
          <Button onClick={() => deleteProduct(id)}>Delete</Button>
          <Button
            component={Link}
            to={`EditProduct/${id}`}
            onClick={() => selectLink(id)}>
              Edit
          </Button>
          <Button
            component={Link}
            to={`ViewProduct/${id}`}
            onClick={() => selectLink(id)}>
              View Description
          </Button>
        </Card>
      )
    })}
    </>
  )
}
