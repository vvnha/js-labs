export const findFirstIPhone = (productList) => {
  if (!Array.isArray(productList) || productList?.length === 0) return null;

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    const { name } = product;

    if (name.toLowerCase().indexOf('iphone') === 0) return product;
  }
  return null;
};

// export const findFirstIPhonev2 = (productList) => {
//   if (!Array.isArray(productList) || productList?.length === 0) return null;

//   return productList.reduce((iphoneProduct, product) => {
//     const { name } = product;
//     iphoneProduct =
//       name.toLowerCase().includes('iphone', 0) && iphoneProduct === null ? product : iphoneProduct;
//     return iphoneProduct;
//   }, null);
// };

export const findFirstIPhonev2 = (productList) => {
  if (!Array.isArray(productList) || productList?.length === 0) return null;

  return productList.find((product) => product.name.toLowerCase().includes('iphone', 0));
};
