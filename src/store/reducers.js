import { ACTION_TYPE } from './actions';

const initialState = {
  product: [
    {id: 1, price: '449', name: 'iPhone 8', description: { text: 'Retina HD display', size: '4.7' }, createData: '22.10.2015'},
    {id: 2, price: '549', name: 'iPhone 8 Plus', description: { text: 'Retina HD display', size: '5.5' }, createData: '04.12.2015'},
    {id: 3, price: '699', name: 'iPhone 11', description: { text: 'Liquid Retina HD display', size: '6.1' }, createData: '05.01.2018'},
    {id: 4, price: '999', name: 'iPhone Pro', description: { text: 'Super Retina XDR display', size: '5.8' }, createData: '13.04.2018'},
    {id: 5, price: '1099', name: 'iPhone Pro Max', description: { text: 'Super Retina XDR display', size: '6.5' }, createData: '21.06.2018'},
  ],
  aboutProduct: null,
}

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.DELETE:
      return {
        ...state,
        product: state.product.filter((i) => i.id !== action.id)
      }
    case ACTION_TYPE.SELECT_LINK:
      return {
        ...state,
        aboutProduct: state.product.find(i => i.id === action.id)
      }
    case ACTION_TYPE.ADD_NEW_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.addNewProduct]
      }
    case ACTION_TYPE.UPDATE_PRODUCT:
      return {
        ...state,
        product: state.product.map((product) => {
          if (product.id !== state.product.id) {
            return product;
          } else {
            return action.upProd;
          }
        }),
      }
    default:
      return state;
  }
}