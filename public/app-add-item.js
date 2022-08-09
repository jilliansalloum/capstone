const mainContainer = document.querySelector('#main_container')
const form = document.getElementById('myForm')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// const seeAllBtn = document.querySelector('#see-all')

const addItemBtn = document.getElementById("add-item-btn")

const baseURL = `http://localhost:3000'
`





const postItem = body => axios.post(baseURL, body).then(itemsCallback).catch(errCallback)






function submitHandler(e) {
    e.preventDefault()

    let brand = document.querySelector('#brand')
    let style = document. querySelector ("#style")
    let season = document. querySelector("#season")
    let img = document. querySelector ("#img")

    let body = {
        brand: brand.value,
        style: style.value,
        season: season.value,
        img: img.value
    }

    postItem(body)
        brand.value = ""
        style.value = ""
        season.value = ""
        img.value = ""
    
}


form.addEventListener("submit", submitHandler)
