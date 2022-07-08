export const findProductByCode = (productList, code) => {
  if (!Array.isArray(productList) || productList?.length <= 0) return -1;
  if (typeof code !== 'string') return -1;

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    if (product.code === code) return i;
  }
  return -1;
};

// export const findProductByCodev2 = (productList, code) => {
//   if (!Array.isArray(productList) || productList?.length <= 0) return -1;
//   if (typeof code !== 'string') return -1;

//   return productList.reduce((productIndex, product, index) => {
//     productIndex = product.code === code ? index : productIndex;
//     return productIndex;
//   }, -1);
// };

export const findProductByCodev2 = (productList, code) => {
  if (!Array.isArray(productList) || productList?.length <= 0) return -1;
  if (typeof code !== 'string') return -1;

  return productList.findIndex((product) => product.code === code);
};
