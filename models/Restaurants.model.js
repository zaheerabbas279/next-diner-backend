const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String },
  address: { type: String },
  category: { type: String },
  phone: { type: Number },
  cost: { type: Number },
  image: { type: String },
  isFeatured: { type: Boolean },
  isDineoutPay: { type: Boolean },
});

// export
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
