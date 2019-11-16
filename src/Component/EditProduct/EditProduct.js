import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { EditForm } from './EditForm/EditForm';

export default class EditProduct extends Component {
  state = {
    redirect: false,
    inputName: '',
    inputPrice: '',
    inputCreate: '',
    inputText: '',
    inputSize: '',
  }

  componentDidMount() {
    if (this.props.aboutProduct) {
      const {
        name,
        price,
        createData,
        description,
        id,
      } = this.props.aboutProduct;

      this.setState({
        inputName: name,
        inputPrice: price,
        inputCreate: createData,
        inputText: description.text,
        inputSize: description.size,
        id,
      });
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleUpdateProduct = (e) => {
    e.preventDefault();
    const {
      inputName,
      inputPrice,
      inputCreate,
      id,
      inputText,
      inputSize,
    } = this.state;
    const {
      updateProduct,
    } = this.props;

    updateProduct({
      id,
      name: inputName,
      price: inputPrice,
      createData: inputCreate,
      description:
      {
        text: inputText,
        size: inputSize,
      },
    });

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (!this.props.aboutProduct) {
      return <Redirect to="/" />;
    }

    const {
      inputName,
      inputPrice,
      inputCreate,
      inputText,
      inputSize,
    } = this.state;

    return (
      <div>
        <EditForm
          inputName={inputName}
          inputPrice={inputPrice}
          inputCreate={inputCreate}
          inputText={inputText}
          inputSize={inputSize}
          handleInputChange={this.handleInputChange}
          handleUpdateProduct={this.handleUpdateProduct}
        />
      </div>
    );
  }
}

EditProduct.propTypes = {
  aboutProduct: PropTypes.string,
  updateProduct: PropTypes.func.isRequired,
};

EditProduct.defaultProps = {
  aboutProduct: {},
};
