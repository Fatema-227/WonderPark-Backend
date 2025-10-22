const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
    required: true,
  },
  value: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
  },
})

module.exports = mongoose.model("Rating", ratingSchema)
