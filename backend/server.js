//To start npm run dev

//enable .env variable
require("dotenv").config();

const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

//listen for request
app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
