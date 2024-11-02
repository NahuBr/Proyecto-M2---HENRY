const express = require("express");
const router = require("./routes/movies");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);

module.exports = app;
