const express = require('express')
const app = express()
const port = 3080

app.get('/', (req, res) => {
  res.send('u ocugahgdklhagjkhdg')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})