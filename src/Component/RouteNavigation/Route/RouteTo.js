import React from 'react';
import { Switch, Route } from "react-router-dom";
import ListOfProductsHandler from '../../ListOfProducts/ListOfProductsHandler';
import ViewProductHandler from '../../ViewProduct/ViewProductHandler';
import EditProductHandler from '../../EditProduct/EditProductHandler';
import AddNewProduct from './../../AddNewProduct/AddNewProductHandler';

export default function RouteTo() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ListOfProductsHandler} />
        <Route path="/EditProduct" component={EditProductHandler} />
        <Route path="/ViewProduct" component={ViewProductHandler} />
        <Route path="/AddNewProduct" component={AddNewProduct} />
      </Switch>
    </div>
  )
}
