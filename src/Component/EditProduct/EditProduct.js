import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

export default class EditProduct extends Component {
   state = {
    redirect: false,
  }

   static getDerivedStateFromProps({ editProduct }, state) {
     return {
      upProdData: editProduct,
     }
  }


  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      upProdData: {
        ...prevState.upProdData,
        [name]: value
      }
    }));
    // this.setState({ [name]: value });
  }

  handleUpdateProduct = (e) => {
    e.preventDefault();
    const { inputName, inputPrice, createData } = this.state.upProdData;
    const { updateProduct, editProduct} = this.props;


    updateProduct({
        id: editProduct.id,
        name: inputName,
        price: inputPrice,
        createData: createData,
        description: { text: 'asd', size: '44'},
    });

     this.setState({
      redirect: true,
    })
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/' />;
    }

    if (!this.props.editProduct) {
      return <Link to="/">List of Product</Link>;
    }

    const { name, price, createData } = this.state.upProdData;

    return (
      <div>
        <form action="">
        <label>
          Name:
          <br/>
          <input
            type="text"
            name="inputName"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          Price:
          <br/>
          <input
            type="text"
            name="price"
            value={price}
            onChange={this.handleInputChange}
          />
        </label>
          <br/>
          <label>
            addDate:
            <br/>
            <input
              type="text"
              name="createData"
              value={createData}
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
