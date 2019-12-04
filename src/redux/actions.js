export const ACTION_TYPE = {
  DELETE_PRODUCT: 'deleteProduct',
  SELECT_LINK: 'selectLink',
  ADD_NEW_PRODUCT: 'addNewProduct',
  UPDATE_PRODUCT: 'updateProduct',
};

export const deleteProduct = id => ({
  type: ACTION_TYPE.DELETE_PRODUCT,
  id,
});

export const selectLink = id => ({
  type: ACTION_TYPE.SELECT_LINK,
  id,
});

export const addNewProduct = i => ({
  type: ACTION_TYPE.ADD_NEW_PRODUCT,
  addNewProduct: i,
});

export const updateProduct = upProd => ({
  type: ACTION_TYPE.UPDATE_PRODUCT,
  upProd,
});
