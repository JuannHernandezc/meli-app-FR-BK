const express = require("express");
const cors = require("cors");
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
