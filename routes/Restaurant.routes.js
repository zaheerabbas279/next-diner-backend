const express = require("express");
const router = express.Router();

const RestaurantController = require("../controllers/Restaurants.controller");

router.post("/addRestaurant", RestaurantController.addRestaurant);
router.get("/getAllRestaurant", RestaurantController.getAllRestaurant);
router.get("/:id", RestaurantController.getRestaurantDetailsById);
module.exports = router;
