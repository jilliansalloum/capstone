const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
// const { default: axios } = require("axios");
const { postItem } = require('./controller');

const posts = [
    { id: 1, brand:"Aritzia", style: "turtleneck", season:"winter", img:"https://aritzia.scene7.com/is/image/Aritzia/hi-res/f22_04_a03_103977_11420_on_a.jpg" },
    { id: 2, brand: "Aritzia", style: "Tank top", season: "summer", img: "https://aritzia.scene7.com/is/image/Aritzia/s22_01_a01_81266_1275_on_a?wid=900" },
    { id: 3, brand: "Aritzia", style: "leggings", season: "winter", img: "https://aritzia.scene7.com/is/image/Aritzia/s22_19_a06_85022_17232_on_a?wid=900" },
    { id: 4, brand: "Aritzia", style: "pegu skirt", season: "fall", img: "https://aritzia.scene7.com/is/image/Aritzia/f22_01_a07_79658_27359_on_a?wid=900" },
    { id: 5, brand: "Aritzia", style: "bodysuit", season: "spring", img: "https://aritzia.scene7.com/is/image/Aritzia/large/f22_01_a01_81856_27359_on_a.jpg" },
    { id: 6, brand: "Aritzia", style: "jeans", season: "winter", img: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_10_a06_77926_19445_on_a.jpg" },
    { id: 7, brand: "Forever21", style:"Hat", season:"summer", img:"https://www.cuyana.com/dw/image/v2/BDQQ_PRD/on/demandware.static/-/Sites-master-catalog-cuyana/default/dw55c66231/pdp_white_hero_900x900_panamahat_black_hero_9142_3.jpg?sw=1600"}

]

app.use(cors())
app.use(express.json())
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

let globalId = 8
app.post('/api/posts', (req,res) => {
    const post = {
        id: globalId ++,
        brand: req.body.brand,
        style: req.body.style,
        season: req.body.season,
        img: req.body.img
    };
    console.log(post)
    posts.push(post);
    res.send(post);
})

app.get('/api/posts/:id', (req,res) => {
    let post = posts.find(c => c.id === parseInt(req.params.id))
    if (!post) res.status(404).send('the post was not found')
    res.send(post);
})


app.get('/api/posts', (req,res) => {
    res.status(200).send(posts)
})

app.get('/posts/brand', (req,res) => {
    res.send(brand);
})

app.delete('/api/posts/:id', (req,res) => {
    const post = post.find( c => c.id === parseInt(req.params.id));
    if (!post) res.status(404).send('the post was deleted')

    const index = posts.index.indexOf(post);
    posts.splice(index, 1);

    res.send(post);
});

app.listen(3000, () => console.log('Server running on 3000'))



