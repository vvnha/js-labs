export const calcCartTotal = (cartItemList) => {
  if (!Array.isArray(cartItemList) || cartItemList?.length < 0) return 0;

  let sum = 0;
  for (let i = 0; i < cartItemList.length; i++) {
    const { product, quantity } = cartItemList[i];

    sum += product.price * quantity;
  }

  return sum;
};

export const calcCartTotalv2 = (cartItemList) => {
  if (!Array.isArray(cartItemList) || cartItemList?.length < 0) return 0;

  return cartItemList.reduce((sum, item) => {
    sum += item.product.price * item.quantity;
    return sum;
  }, 0);
};
