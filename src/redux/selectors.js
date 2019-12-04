export const getProduct = state => state.product;
export const getAboutProduct = state => state.aboutProduct;
export const getIdProduct = state => state.product.map(id => ({ id }));
