const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine')

app.listen(port, () => {
  console.log(`Example app is on port${port}!`)
})