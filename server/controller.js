// const URL = 'http://localhost:3000'

require('dotenv').config()
const { DATABASE_URL } = process.env;

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// })

// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'lfsmxwif',
//   dataset: 'production',
//   apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
//   token: 'sk3Kjm1kj7TRWUDpn3DjPRZGK9T3AbsJP8B2SrAirZ18ZB2jIb79V8L1tlX5Ir6k1f7fjFmZZ8iGZCaR1EgjbD40bz96lYYJkIt36mxwLnPt2Vun1q6iq2bQpM0fR7GNRm3wBHTxKW33V7WEhbnJr5BsDU0wAOFa0lTs8TQNQRuvXxVAK0Ex', // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// })


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
    addItem: (req,res) => {
        const { brand, style, season, img } = req.body;
        let newItem = {
            id: globalId,
            brand,
            style,
            season,
            img
        } 
        posts.push(newItem);
        res.status(200).send(posts);
        globalId++
    },
    searchItem: (req,res) => {
        
    }

}

//must declare the variabel for items = ie require teh database being used