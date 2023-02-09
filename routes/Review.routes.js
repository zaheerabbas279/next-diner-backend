const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/Reviews.controller");

router.post("/addReview", ReviewController.addReview);
router.get("/getReviews", ReviewController.getAllReviews);

module.exports = router;
