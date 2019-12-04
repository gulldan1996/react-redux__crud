/* eslint-disable arrow-body-style */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListOfProducts from '../ListOfProducts/ListOfProducts';
import ViewProduct from '../../View/ViewProduct/ViewProduct';
import EditProduct from '../EditProduct/EditProduct';
import AddNewProduct from '../AddNewProduct/AddNewProduct';

export const RouteTo = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={ListOfProducts} />
        <Route path="/EditProduct" component={EditProduct} />
        <Route path="/ViewProduct" component={ViewProduct} />
        <Route path="/AddNewProduct" component={AddNewProduct} />
      </Switch>
    </>
  );
};
