const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  restaurant_id: { type: String },
  review: { type: String },
  name: { type: String },
});

// export
const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
