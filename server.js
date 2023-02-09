require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RestaurantRoutes = require("./routes/Restaurant.routes");
const ReviewRoutes = require("./routes/Review.routes");

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(RestaurantRoutes);
app.use(ReviewRoutes);
// db connection string
mongoose
  .connect(
    "mongodb+srv://ZaheerDBUser:zahir%40216@cluster0.gnt9x.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "DinerDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("Server is running and connected to db");
    });
  })
  .catch((err) => {
    console.log("error in db connection");
  });

app.get("/ping", (req, res) => {
  res.send("PONG");
});
