const categoriesRouter = require("express").Router();

const findAllUsers = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

categoriesRouter.get("/users", findAllUsers, sendAllUsers);

module.exports = categoriesRouter;
