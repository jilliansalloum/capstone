const URL = 'https://lfsmxwif.api.sanity.io/v2021-06-07/data/query/production?query=*'

require('dotenv').config()
const { DATABASE_URL } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'lfsmxwif',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'sk3Kjm1kj7TRWUDpn3DjPRZGK9T3AbsJP8B2SrAirZ18ZB2jIb79V8L1tlX5Ir6k1f7fjFmZZ8iGZCaR1EgjbD40bz96lYYJkIt36mxwLnPt2Vun1q6iq2bQpM0fR7GNRm3wBHTxKW33V7WEhbnJr5BsDU0wAOFa0lTs8TQNQRuvXxVAK0Ex', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})


module.exports = {
    getBrand: (req,res) =>{
        res.status(200).send({
        })
    },
    deleteItem: (req,res) =>{
        let {id} = req.params
        let index = items.findIndex(item => item.id === +id)
        if( index === -1){
         res.status(400).send(items)
        } else {
            items.splice(index,1)
            res.status(200).send(items)
    }
    },
    addItem: (req,res) => {
        const {id, address, price, imageURL} = req.body;
        let newItem = {
            id: globalId,
            address,
            price,
            imageURL,
        } 
        items.push(newItem);
        res.status(200).send(items);
        globalId++
    },
    searchItem: (req,res) => {
        
    }

}

