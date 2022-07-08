export const findProductHavingFreeShip = (productList) => {
  if (!Array.isArray(productList) || productList?.length === 0) return null;

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    if (product.isFreeShip) return product;
  }
  return null;
};

// export const findProductHavingFreeShipv2 = (productList) => {
//   if (!Array.isArray(productList) || productList?.length === 0) return null;

//   return productList.reduce((productHavingFreeship, product) => {
//     productHavingFreeship =
//       product.isFreeShip && productHavingFreeship === null ? product : productHavingFreeship;
//     return productHavingFreeship;
//   }, null);
// };

export const findProductHavingFreeShipv2 = (productList) => {
  if (!Array.isArray(productList) || productList?.length === 0) return null;

  return productList.find((product) => product.isFreeShip === true);
};
