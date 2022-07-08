export const hasFreeShip = (productList, price) => {
  if (!Array.isArray(productList)) return false;

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    if (product.isFreeShip && product.price < price) return true;
  }
  return false;
};

// export const hasFreeShipv2 = (productList, price) => {
//   if (!Array.isArray(productList)) return false;

//   return productList.some((x) => x.isFreeShip && x.price < price);
// };

export const hasFreeShipv2 = (productList, price) => {
  if (!Array.isArray(productList)) return false;

  return productList.findIndex((x) => x.isFreeShip && x.price < price) > -1;
};
