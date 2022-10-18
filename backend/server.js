//To start npm run dev

//enable .env variable
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//get routes
const userRoutes = require("./routes/users");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

/*
    app.get("/", (req, res) => {
    res.json({ message: "Welcome to the app" });
    });
*/
//routes
app.use("/api/users", userRoutes);

//connect to mongo db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request once connected to database
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to mongoDB & Listening on PORT ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
