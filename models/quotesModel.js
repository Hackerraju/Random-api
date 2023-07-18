const mongoose = require("mongoose");

const quotesSchema = mongoose.Schema(
  {
    quotes: {
      type: "string",
      required: [true, "Please enter a quote"],
    },
    author: {
      type: "string",
      required: [true, "Please enter a author name"],
    },
    view: {
      type: "number",
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Quote = mongoose.model('Quote', quotesSchema)

module.exports = Quote;
