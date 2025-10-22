const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
})
const Rating = mongoose.model("Rating", ratingSchema)
module.exports = Rating
