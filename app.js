const express = require('express')
const mongoose = require('mongoose')
const app = express()

//這段用來連接資料庫,最後面的todo-list就是我在robo-3t裡新增的database名稱
mongoose.connect('mongodb://localhost/todo-list')

//取得連線
const db = mongoose.connection
//連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send(`it will be todo-list`)
})

app.listen(3000, () => {
  console.log(`App is running on http://localhost:3000`)
})