const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const db = require('./db')
const gameRoutes=require('./routes/gameRoutes')
const ratingRoutes = require('./routes/rating');

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/games',gameRoutes)
app.use('/ratings', ratingRoutes);

app.get('/',(req,res)=>{
  res.send('Theme Park API is running..')
})


app.listen(PORT, () => {
  console.log(`Express Server Running on Port`, PORT, `. . .`)
})
