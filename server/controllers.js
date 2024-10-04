const axios = require("axios");

const URI_BASE = "https://api.mercadolibre.com";

const getItems = async (req, res, next) => {
  const query = req.query.q;
  try {
    const response = await axios.get(
      `${URI_BASE}/sites/MLA/search?q=${query}`
    );
    res.locals.data = response.data;
    // console.log(res.locals.data.results.slice(0, 4));
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const itemResponseById = await axios.get(
      `${URI_BASE}/items/${id}`
    );
    const itemDataById = itemResponseById.data;

    const responseDescriptionById = await axios.get(
      `${URI_BASE}/items/${id}/description`
    );
    const descriptionDataById = responseDescriptionById.data;

    res.locals.itemData = itemDataById;
    res.locals.descriptionData = descriptionDataById;

    next();
  } catch {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getItems,
  getItemById,
};
