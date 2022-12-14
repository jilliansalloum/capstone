const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const { searchByCategory, createPost, deleteItem, getItems} = require('./controller');

app.use(cors())
app.use(express.json())
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


app.post('/api/posts', createPost)

app.get('/api/posts', getItems)

app.get('/api/search/:searchCategory/:searchTerm', searchByCategory)

app.delete('/api/posts/:id', deleteItem);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`up on ${port}`))

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '.../index.html'))
})