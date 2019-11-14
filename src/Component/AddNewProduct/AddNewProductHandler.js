import AddNewProduct from './AddNewProduct';
import { connect } from 'react-redux';
import { addNewProduct } from '../../store/actions';

function mapStateToProps(state) {
  return {
    aboutProduct: state.aboutProduct,
    lengthProduct: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewProduct: (item) => dispatch(addNewProduct(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProduct);
