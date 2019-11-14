import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

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
    if (this.props.editProduct) {
      const { name, price, createData, description, id } = this.props.editProduct;
      return this.setState({
      inputName: name,
      inputPrice: price,
      inputCreate: createData,
      inputText: description.text,
      inputSize: description.size,
      id: id,
      })
    }
  }


  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleUpdateProduct = (e) => {
    e.preventDefault();
    const { inputName, inputPrice, inputCreate, id, inputText, inputSize } = this.state;
    const { updateProduct } = this.props;

    updateProduct({
        id: id,
        name: inputName,
        price: inputPrice,
        createData: inputCreate,
        description: { text: inputText, size: inputSize},
    });

     this.setState({
      redirect: true,
    })
  };

  render() {
    if(this.state.redirect) {
      return <Redirect to='/' />;
    }

    if (!this.props.editProduct) {
      return <Link to="/">List of Product</Link>;
    }

    const { inputName, inputPrice, inputCreate, inputText, inputSize } = this.state;

    return (
      <div>
        <form action="">
        <label>
          Name:
          <br/>
          <input
            type="text"
            name="inputName"
            value={inputName}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          Price:
          <br/>
          <input
            type="number"
            name="inputPrice"
            value={inputPrice}
            onChange={this.handleInputChange}
          />
        </label>
          <br/>
          <label>
            addDate:
            <br/>
            <input
              type="text"
              name="inputCreate"
              value={inputCreate}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            About Display:
            <br/>
            <input
              type="text"
              name="inputText"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Size Display:
            <br/>
            <input
              type="number"
              name="inputSize"
              value={inputSize}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <button onClick={this.handleUpdateProduct}>Change</button>
        </form>
      </div>
    );
  };
};

EditProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  createData: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};

EditProduct.defaultProps = {
  createData: '',
  text: '',
  size: '',
};
