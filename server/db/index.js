const mongoose = require("mongoose");
const secret = require("../secret.js");

mongoose.set("strictQuery", false);

mongoose
  .connect(`mongodb+srv://admin-abdul:${secret}@cluster0.t8dv668.mongodb.net/`)
  .then(() => console.log("Connected to mongo db"))
  .catch((e) => console.log(e));
