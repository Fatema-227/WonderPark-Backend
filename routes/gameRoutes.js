const express=require('express')
const router=express.Router()
const gameController=require("../controllers/gameController")

router.get('/',gameController.getGames)
router.post('/',gameController.createGame)
router.delete('/:id',gameController.deleteGame)

module.exports=router
