const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const HttpError = require("./models/http-error");
const { routesInit } = require("./routes/config-route");

// const fs = require("fs");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use("/uploads", express.static(path.join("uploads")));

routesInit(app);

mongoose
  .connect(
    `mongodb+srv://mielkadosh:miel123@cluster0.bxfufrl.mongodb.net/estore?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log(err);
  });
