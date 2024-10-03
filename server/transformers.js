const transformDataItems = (req, res, next) => {
  const resultSearchItem = res.locals.data.results
    .slice(0, 4)
    .map((itemSearched) => {
      return {
        id: itemSearched.id,
        title: itemSearched.title,
        price: {
          currency: itemSearched.sale_price.currency_id,
          amount: itemSearched.sale_price.amount,
          decimals: "",
        },
        picture: itemSearched.thumbnail,
        condition: itemSearched.condition,
        free_shiping: itemSearched.shipping.free_shiping,
      };
    });
  res.locals.transformedData = {
    author: {
      name: "Juan",
      lastName: "Hernandez",
    },
    items: resultSearchItem,
  };
  next();
};

const transformDataItemById = (req, res, next) => {
  const itemData = res.locals.itemData;
  const descriptionData = res.locals.descriptionData;
  const resultSearchItemById = {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: itemData.price,
      decimals: "",
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
