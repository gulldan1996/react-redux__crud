import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { AddForm } from './AddForm/AddForm';

export default class AddNewProduct extends Component {
  state = {
    inputName: '',
    inputPrice: '',
    createData: '',
    text: '',
    size: '',
    redirect: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      inputName,
      inputPrice,
      createData,
      text,
      size,
    } = this.state;
    const {
      addNewProduct,
      lengthProduct,
    } = this.props;

    addNewProduct({
      id: lengthProduct.length + 1,
      name: inputName,
      price: inputPrice,
      createData,
      description:
        {
          text,
          size,
        },
    });

    this.setState({
      inputName: '',
      inputPrice: '',
      createData: '',
      text: '',
      size: '',
      redirect: true,
    });
  };

  render() {
    const {
      inputName,
      inputPrice,
      createData,
      text,
      size,
    } = this.state;
    const {
      handleSubmit,
      handleInputChange,
    } = this;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <AddForm
        inputName={inputName}
        inputPrice={inputPrice}
        createData={createData}
        text={text}
        size={size}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    );
  }
}

AddNewProduct.propTypes = {
  lengthProduct: PropTypes.string,
  addNewProduct: PropTypes.func.isRequired,
};

AddNewProduct.defaultProps = {
  lengthProduct: {},
};
