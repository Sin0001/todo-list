const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

const routes = require('./routes')
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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//使用body parser
//這樣req裡的東西才能拿出來使用傳來傳去
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

app.listen(3000, () => {
  console.log(`App is running on http://localhost:3000`)
})