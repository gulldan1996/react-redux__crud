import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AddNewProduct extends Component {
  state = {
    inputName: "",
    inputPrice: "",
    createData: "",
    text: "",
    size: "",
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputName, inputPrice, createData, text, size } = this.state;
    const { addNewProduct, lengthProduct } = this.props;

    addNewProduct({
      id: lengthProduct.length + 1,
      name: inputName,
      price: inputPrice,
      createData: createData,
      description: { text: text, size: size }
    });

    this.setState({
      inputName: "",
      inputPrice: "",
      createData: "",
      text: "",
      size: "",
      redirect: true
    });
  };

  render() {
    const { inputName, inputPrice, createData, text, size } = this.state;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <form>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="inputName"
            value={inputName}
            placeholder="Name"
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <br />
          <input
            type="number"
            name="inputPrice"
            value={inputPrice}
            placeholder="price"
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          addDate:
          <br />
          <input
            type="date"
            name="createData"
            value={createData}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Text about display:
          <br />
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Size display:
          <br />
          <input
            type="number"
            name="size"
            value={size}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
