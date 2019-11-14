import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class AddNewProduct extends Component {

  state = {
    inputName: '',
    inputPrice: '',
    createData: '',
    showData: {
      name: '',
      price: '',
    },
    redirect: false,
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputName, inputPrice, createData } = this.state;
    const { addNewProduct, lengthProduct } = this.props;


    addNewProduct({
        id: lengthProduct.length + 1,
        name: inputName,
        price: inputPrice,
        createData: createData,
        description: { text: '', size: ''},
    });

    this.setState({
      inputName: '',
      inputPrice: '',
      createData: '',
      redirect: true,
    })
  }

  render() {
    const { inputName, inputPrice, createData} = this.state;

    if(this.state.redirect) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <form>
        <label>
            Name:
            <br/>
            <input type="text" name="inputName" value={inputName}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Price:
            <br/>
            <input type="text" name="inputPrice" value={inputPrice}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            addDate:
            <br/>
            <input type="text" name="createData" value={createData}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
