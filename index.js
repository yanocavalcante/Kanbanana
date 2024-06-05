const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('layzin é foda!')
})

app.listen(3000)