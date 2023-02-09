const Restaurant = require("../models/Restaurants.model");

module.exports = {
  addRestaurant: async (req, res) => {
    try {
      const result = req.body;
      const restaurant = new Restaurant(result);
      const savedRestaurant = await restaurant.save();
      res.send(savedRestaurant);
    } catch (error) {
      console.log("error", error);
    }
  },

  getAllRestaurant: async (req, res) => {
    try {
      Restaurant.find((err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          res.send("no restaurants found");
        }
      });
    } catch (error) {
      console.log("error getting list of restaurant");
    }
  },

  getRestaurantDetailsById: async (req, res) => {
    try {
      Restaurant.findById(req.params.id, (err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          console.log("error getting the data=============>");
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  },
};
