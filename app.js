const express = require('express')
const app = express()
const db = require('./models')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
const port = 3000


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({ secret: 'iloveming', resave: false, saveUninitialized: false }))
app.use(flash())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash("success_messages")
  res.locals.error_messages = req.flash('error_messages')
  next()
})


app.listen(port, () => {
  console.log(`Example app is on port${port}!`)
})

require('./routes')(app)