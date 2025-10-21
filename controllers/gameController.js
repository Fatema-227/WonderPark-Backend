const Game=require('../models/Game')

const getGames=async()=>{
 return await Game.find()
}

const getGameById=async(id)=>{
  return await Game.findById(id)
}

const createGame=async(gameData)=>{
  return await Game.create(gameData)
}

const deleteGame= async(id)=>{
  const game=await Game.findById(id)

  if(!game){
    return 'Game not found'
  }

  await game.deleteOne()
  return'Game delete successfully'
}


module.exports={
  getGames,
  getGameById,
  createGame,
  deleteGame
}
