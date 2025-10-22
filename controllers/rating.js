const Rating  = require('../models/Rating.js');

const GetRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({});
    res.status(200).send(ratings);
  } catch (error) {
    throw error;
  }
};

const GetRatingsByGame = async (req, res) => {
   try {
    const gameId = req.params.gameId;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
      return res.status(400).send({ error: 'Invalid game ID format' });
    }

    const ratings = await Rating.find({ game: gameId });
    res.status(200).send(ratings);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const CreateRating = async (req, res) => {
  try {
    const rating = await Rating.create(req.body);
    res.status(200).send(rating);
  } catch (error) {
    throw error;
  }
};

const DeleteRating = async (req, res) => {
  try {
    await Rating.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: 'Rating Deleted', id: req.params.id });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetRatings,
  GetRatingsByGame,
  CreateRating,
  DeleteRating
};
