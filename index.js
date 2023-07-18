require("dotenv").config();
const cors = require('cors');
const express = require("express");
const { default: mongoose } = require("mongoose");
const quoteRoute = require('./routes/quoteRoute')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', quoteRoute)

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to mongoDB...");
    app.listen(PORT, () => {
      console.log(`Random API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
