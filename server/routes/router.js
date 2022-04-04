const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

// Front
route.get("/", services.homeRoutes);
route.get("/add-user", services.add_user);
route.get("/update-user/:id", services.update_user);

// API
route.post("/api/users", controller.createUser);
route.get("/api/users", controller.getAllUsers);
route.get("/api/users/:id", controller.getUser);
route.put("/api/users/:id", controller.updateUser);
route.delete("/api/users/:id", controller.deleteUser);

module.exports = route;
