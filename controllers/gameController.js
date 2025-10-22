const Game = require('../models/Game')

// Get all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find({})
    res.status(200).send(games)
  } catch (error) {
    res.status(500).send({ msg: "Error getting all games!", error:error.message })
  }
}

const getGameId = async (req, res) => {
  try {
    const games = await Game.findById(req.params.id)
    res.status(200).send(games)
  } catch (error) {
    res.status(500).send({ msg: "Error getting all games!", error:error.message })
  }
}
// Create a new game
const createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body)
    res.status(200).send(newGame)
  } catch (error) {
    res.status(500).send({ msg: "Error creating a new game!", error:error.message })
  }
}

// Delete a game
const deleteGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id)
    if (!game) return res.status(404).send({ msg: "Game not found!" })

    await game.deleteOne()
    res.status(200).send({ msg: "Game deleted successfully!" })
  } catch (error) {
    res.status(500).send({ msg: "Error deleting the game!", error:error.message  })
  }
}

module.exports = {
  getGames,
  createGame,
  getGameId,
  deleteGame
}
