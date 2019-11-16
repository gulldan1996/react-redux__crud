import { connect } from 'react-redux';
import EditProduct from './EditProduct';
import { updateProduct } from '../../store/actions';

function mapStateToProps(state) {
  return {
    aboutProduct: state.aboutProduct,
    lengthProduct: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: upProd => dispatch(updateProduct(upProd)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
