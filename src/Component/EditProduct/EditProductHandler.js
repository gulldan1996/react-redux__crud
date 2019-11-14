import EditProduct from './EditProduct';
import { connect } from 'react-redux';
import { updateProduct } from '../../store/actions';

function mapStateToProps(state) {
  return {
    editProduct: state.aboutProduct,
    lengthProduct: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (upProd) => dispatch(updateProduct(upProd))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
