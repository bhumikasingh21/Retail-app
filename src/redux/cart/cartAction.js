const ADD_TO_CART = "ADD_TO_CART";

const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,

    payload: data,
  };
};

export const deleteFromCart = (data) => {
  return {
    type: DELETE_FROM_CART,

    payload: data,
  };
};