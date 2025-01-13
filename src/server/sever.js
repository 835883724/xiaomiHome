const express = require('express');

const path = require('path')
const cors = require('cors')
const multiparty = require('multiparty')
const fse = require('fs-extra')
const bodyParser = require('body-parser')


const app = express()

app.use(cors())


app.listen(8080, () => {
  console.log('服务已启动');
})