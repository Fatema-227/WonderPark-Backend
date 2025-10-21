const express=require('express')
const router=express.Router()

const rateCtrl = require("../controllers/rating")

router.get('/', rateCtrl.GetRatings);
router.get('/game/:gameId', rateCtrl.GetRatingsByGame);
router.post('/', rateCtrl.CreateRating);
router.delete('/:id', rateCtrl.DeleteRating);

module.exports = router
