/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateProduct } from '../../redux/actions';
import { EditForm } from '../../View/EditForm';
import { getAboutProduct } from '../../redux/selectors';

class EditProduct extends Component {
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

let mapStateToProps = state => ({
  aboutProduct: getAboutProduct(state),
});

let mapDispatchToProps = dispatch => ({
  updateProduct: upProd => dispatch(updateProduct(upProd)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
