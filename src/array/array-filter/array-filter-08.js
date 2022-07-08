export const findAllProducts = (productList) => {
  if (!Array.isArray(productList) || productList?.length <= 1) return [];

  const freeshipProductList = [];

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    if (product.isFreeShip) freeshipProductList.push(product);
  }

  return freeshipProductList;
};

export const findAllProductsv2 = (productList) => {
  if (!Array.isArray(productList) || productList?.length <= 1) return [];

  return productList.filter((product) => {
    return product.isFreeShip;
  });
};
