const express = require("express");
const Router = express.Router();
const PrincipalRouter = require("./Principal")

Router.use("/Principal", PrincipalRouter);

module.exports = Router;