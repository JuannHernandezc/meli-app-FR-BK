const express = require("express");
const { getItems, getItemById } = require("./controllers");
const { transformDataItems, transformDataItemById } = require("./transformers");


const router = express.Router();

router.get('/api/items', getItems, transformDataItems, (req, res) => {
    res.json(res.locals.transformedData);
});

router.get('/api/items/:id', getItemById, transformDataItemById, (req, res) => {
    res.json(res.locals.transformedData);
});

module.exports = router;