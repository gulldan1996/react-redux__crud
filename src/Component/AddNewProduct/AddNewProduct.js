/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNewProduct } from '../../redux/actions';
import { AddForm } from '../../View/AddForm';
import { getAboutProduct, getIdProduct } from '../../redux/selectors';

class AddNewProduct extends Component {
  state = {
    inputName: '',
    inputPrice: '',
    createData: '',
    inputText: '',
    inputSize: '',
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
      inputText,
      inputSize,
    } = this.state;
    const {
      idProduct,
      addNewProduct,
    } = this.props;

    addNewProduct({
      id: Math.max(...idProduct) + 1,
      name: inputName,
      price: inputPrice,
      createData,
      description:
        {
          text: inputText,
          size: inputSize,
        },
    });

    this.setState({
      inputName: '',
      inputPrice: '',
      createData: '',
      inputText: '',
      inputSize: '',
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

let mapStateToProps = state => ({
  aboutProduct: getAboutProduct(state),
  idProduct: getIdProduct(state),
});

let mapDispatchToProps = dispatch => ({
  addNewProduct: item => dispatch(addNewProduct(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProduct);
