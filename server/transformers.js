const transformDataItems = (req, res, next) => {
  const categories = res.locals.data.filters
    .map((item) => {
      return item.values.map((value) => {
        return value.name
      })
    });

  const resultSearchItem = res.locals.data.results
    .slice(0, 4)
    .map((itemSearched) => {
      const [amount] = itemSearched.sale_price.amount.toString().split('.');

      return {
        id: itemSearched.id,
        title: itemSearched.title,
        price: {
          currency: itemSearched.sale_price.currency_id,
          amount: parseInt(amount, 10),
          decimals: itemSearched.sale_price.amount,
        },
        picture: itemSearched.thumbnail,
        condition: itemSearched.condition,
        free_shipping: itemSearched.shipping.free_shipping,
      };
    });
  res.locals.transformedData = {
    author: {
      name: "Juan",
      lastName: "Hernandez",
    },
    items: resultSearchItem,
    categories: categories.flat()
  };
  next();
};

const transformDataItemById = (req, res, next) => {
  const itemData = res.locals.itemData;
  const descriptionData = res.locals.descriptionData;

  const [amount] = itemData.price.toString().split('.');

  const resultSearchItemById = {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: parseInt(amount, 10),
      decimals: itemData.price,
    },
    picture: itemData.thumbnail,
    condition: itemData.condition,
    free_shiping: itemData.shipping.free_shipping,
    sold_quantity: itemData.initial_quantity,
    description: descriptionData.plain_text,
  };
  res.locals.transformedDataById = {
    author: {
      name: "Juan",
      lastName: "Hernandez",
    },
    item: resultSearchItemById,
  };
  next();
};

module.exports = {
  transformDataItems,
  transformDataItemById
};
