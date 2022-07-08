export const findAllProducts = (productList) => {
  if (!Array.isArray(productList) || productList?.length <= 1) return [];

  const iphoneProductList = [];

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    if (product.name.toLowerCase().indexOf('iphone') > -1 && product.amount > 0)
      iphoneProductList.push(product);
  }

  return iphoneProductList;
};

export const findAllProductsv2 = (productList) => {
  if (!Array.isArray(productList) || productList?.length <= 1) return [];

  return productList.filter((product) => {
    return product.name.toLowerCase().indexOf('iphone') > -1 && product.amount > 0;
  });
};
