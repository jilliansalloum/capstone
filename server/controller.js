const posts = [
    { id: 1, brand:"Aritzia", style: "turtleneck", season:"winter", img:"https://aritzia.scene7.com/is/image/Aritzia/hi-res/f22_04_a03_103977_11420_on_a.jpg" },
    { id: 2, brand: "Aritzia", style: "tank top", season: "summer", img: "https://aritzia.scene7.com/is/image/Aritzia/s22_01_a01_81266_1275_on_a?wid=900" },
    { id: 3, brand: "Aritzia", style: "leggings", season: "winter", img: "https://aritzia.scene7.com/is/image/Aritzia/s22_19_a06_85022_17232_on_a?wid=900" },
    { id: 4, brand: "Aritzia", style: "pegu skirt", season: "fall", img: "https://aritzia.scene7.com/is/image/Aritzia/f22_01_a07_79658_27359_on_a?wid=900" },
    { id: 5, brand: "Aritzia", style: "bodysuit", season: "spring", img: "https://aritzia.scene7.com/is/image/Aritzia/large/f22_01_a01_81856_27359_on_a.jpg" },
    { id: 6, brand: "Aritzia", style: "jeans", season: "winter", img: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_10_a06_77926_19445_on_a.jpg" },
    { id: 7, brand: "Forever21", style:"hat", season:"summer", img:"https://www.cuyana.com/dw/image/v2/BDQQ_PRD/on/demandware.static/-/Sites-master-catalog-cuyana/default/dw55c66231/pdp_white_hero_900x900_panamahat_black_hero_9142_3.jpg?sw=1600"},
    { id: 8, brand: "Aritzia", style:"dress pants", season:"winter", img:"https://s7d9.scene7.com/is/image/Aritzia/fa22-wk1-clp-introtofall-pt1-c?wid=900"},
    { id: 9, brand: "Aritzia", style:"overalls", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/large/s22_10_a08_95997_24419_on_a.jpg"},
    { id: 10, brand: "Aritzia", style:"trench coat", season:"spring", img:"https://aritzia.scene7.com/is/image/Aritzia/s22_01_a05_58478_5864_off_a?wid=900"},
    { id: 11, brand: "Lululemon", style:"beige cardigan", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/large/f22_04_a03_79020_27384_elevated_a.jpg"},
    { id: 12, brand: "Aritzia", style:"nora skirt", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/f22_02_a07_81650_2198_on_a?wid=900"},
    { id: 13, brand: "Aritzia", style:"sport sneaker", season:"summer", img:"https://aritzia.scene7.com/is/image/Aritzia/hi-res/s22_99_n01_92321_30277_off_a.jpg"},
    { id: 14, brand: "Nordstrom", style:"silk blouse", season:"summer", img:"https://aritzia.scene7.com/is/image/Aritzia/f22_01_a02_92287_15033_on_a?wid=900"},
    { id: 15, brand: "Aritzia", style:"wistful blouse", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/large/f22_04_a02_80851_27381_on_b.jpg"},
    { id: 16, brand: "Aritzia", style:"lydia top", season:"winter", img:"https://aritzia.scene7.com/is/image/Aritzia/large/s22_04_a01_83261_1274_on_b.jpg"},
    { id: 17, brand: "Aritzia", style:"oversized button up", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/s22_03_a02_99711_26696_on_a?wid=900"},
    { id: 18, brand: "Target", style:"denim vest", season:"summer", img:"https://aritzia.scene7.com/is/image/Aritzia/large/f22_07_a04_96957_25153_on_a.jpg"},
    { id: 19, brand: "Aritzia", style:"cargo pants", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/large/s22_03_a06_94960_26941_on_a.jpg"},    
    { id: 20, brand: "Aritzia", style:"baby blue sweatpants", season:"fall", img:"https://aritzia.scene7.com/is/image/Aritzia/f22_07_a06_79458_27362_on_a?wid=900"},    
    { id: 21, brand: "Aritzia", style:"green leather pant", season:"spring", img:"https://aritzia.scene7.com/is/image/Aritzia/f22_04_a06_103470_27381_on_a?wid=900"}

]

module.exports = {
    getItems: (req,res) =>{
        res.status(200).send(posts)
    },
    deleteItem: (req,res) =>{
        let {id} = req.params
        let index = posts.findIndex(post => post.id === +id)
        if( index === -1){
         res.status(400).send(posts)
        } else {
            items.splice(index,1)
            res.status(200).send(posts)
    }
    },
    searchByCategory: (req,res) => {
        const { searchCategory, searchTerm } = req.params
        const filtered = posts.filter(prod => {
            return prod[`${searchCategory}`].toLowerCase() === searchTerm.toLowerCase()
        })
        res.status(200).send(filtered)
    },
    createPost: (req,res) => {
        let globalId = 22
        const post = {
            id: globalId,
            brand: req.body.brand,
            style: req.body.style,
            season: req.body.season,
            img: req.body.img
        };
        console.log(post)
        posts.push(post);
        res.status(200).send(post)
        globalId++
    }
}

