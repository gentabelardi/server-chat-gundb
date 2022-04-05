const express = require('express')
let Gun = require('gun');

const app = express()
const port = process.env.PORT || 3000
app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

Gun({ web: server });
