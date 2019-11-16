import { connect } from 'react-redux';
import ListOfProducts from './ListOfProducts';
import { deleteProduct, selectLink } from '../../store/actions';

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: id => dispatch(deleteProduct(id)),
    selectLink: id => dispatch(selectLink(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfProducts);
