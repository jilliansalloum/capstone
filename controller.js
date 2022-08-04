const URL = 'https://www.clo-set.com/api/lines?brandId=275848'


module.exports = {
    getBrand: (req,res) =>{
        res.status(200).send({
        })
    },
    deleteHouse: (req,res) =>{
        let {id} = req.params
        let index = houses.findIndex(house => house.id === +id)
        if( index === -1){
         res.status(400).send(houses)
        } else {
            houses.splice(index,1)
            res.status(200).send(houses)
    }
    },
    createHouse: (req,res) => {
        const {id, address, price, imageURL} = req.body;
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL,
        } 
        houses.push(newHouse);
        res.status(200).send(houses);
        globalId++
    },
    updateHouse: (req,res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(house => + house.id === +id)
        
        if(houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if( type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if( type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}

