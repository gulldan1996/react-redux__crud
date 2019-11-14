import React from 'react';
import { Link } from 'react-router-dom';


export const ViewProduct = ({ aboutProduct }) => {
  if (!aboutProduct) {
    return <Link to="/">List of Product</Link>;
  }

  const { name, price, createData, description } = aboutProduct;
  const { text, size } = description;

  return (
        <div>
          <div>{name}</div>
          <div>{price}</div>
          <div>{createData}</div>
          <div>{text}</div>
          <div>{size}</div>
        </div>
  );
};


