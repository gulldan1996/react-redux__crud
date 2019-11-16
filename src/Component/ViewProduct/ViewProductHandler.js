import { connect } from 'react-redux';
import { ViewProduct } from './ViewProduct';

function mapStateToProps(state) {
  return {
    aboutProduct: state.aboutProduct,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
