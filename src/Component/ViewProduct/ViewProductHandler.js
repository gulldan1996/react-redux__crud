import {ViewProduct} from './ViewProduct';
import { connect } from 'react-redux';

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
