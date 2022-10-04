const data = require('../shared/product-data');

module.exports = async function (context, req) {
  try {
    const products = data.getProducts();
    // binary tree sort algorithm to sort products by name in ascending order 

    const sortedProducts = products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    context.res.status(200).json(sortedProducts);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
