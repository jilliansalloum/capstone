const express = require('express')
// const cors = require('cors')

const app = express()
const { default: axios } = require("axios");
const { postItem } = require('./controller');


// app.use(cors())
app.use(express.json())
app.use(express.static('public'));

axios.get('https://lfsmxwif.api.sanity.io/v2022-08-08/data/query/production?query=*')
app.post('/data/query....', postItem)

app.listen(5000, () => console.log('Server running on 5000'))



