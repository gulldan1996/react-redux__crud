export const ACTION_TYPE = {
  DELETE: 'deleteProduct',
  SELECT_LINK: 'selectLink',
  ADD_NEW_PRODUCT: 'addNewProduct',
  UPDATE_PRODUCT: 'updateProduct'
}

export function deleteProduct(id) {
  return {
    type: ACTION_TYPE.DELETE,
    id
  };
};

export function selectLink(id) {
  return {
    type: ACTION_TYPE.SELECT_LINK,
    id,
  };
};

export function addNewProduct(i) {
  return {
    type: ACTION_TYPE.ADD_NEW_PRODUCT,
    addNewProduct: i,
  };
};

export function updateProduct(upProd) {
  return {
    type: ACTION_TYPE.UPDATE_PRODUCT,
    upProd,
  };
};
