const Review = require("../models/Reviews.model");

module.exports = {
  addReview: async (req, res) => {
    try {
      const result = req.body;
      const review = new Review(result);
      const savedReview = await review.save();
      res.send(savedReview);
    } catch (error) {
      console.log("err", error);
    }
  },
  getAllReviews: async (req, res) => {
    try {
      Review.find((err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          res.send("no review found");
        }
      });
    } catch (error) {
      console.log("error getting list of review");
    }
  },
};
