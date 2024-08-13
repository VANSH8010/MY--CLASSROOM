const express = require("express");
const Router = express.Router();
const PrincipalRouter = require("./Principal")
const StudentRouter = require("./Student");
const TeacherRouter = require("./Teacher");

Router.use("/Principal", PrincipalRouter);
Router.use("/Student", StudentRouter);
Router.use("/Teacher", TeacherRouter);

module.exports = Router;