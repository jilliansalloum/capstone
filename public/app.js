const mainContainer = document.querySelector('#main_container')
const form = document.getElementById('myForm')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// const seeAllBtn = document.querySelector('#see-all')
const allItemsDiv = document.querySelector('#all-items')

const addItemBtn = document.getElementById("add-item-btn")

const baseURL = `http://localhost:3000'
`
const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)


const seeAllBtn = document.getElementById("see-all")
console.log("Button Was Clicked!")
const getAll = () => {
    axios.get("http://localhost:3000/api/posts/")
    .then (res => {
        const data = res.data;
        alert(data);
    });
};

seeAllBtn.addEventListener('click',getAll)

const getPosts = () => axios.get(baseURL).then(itemsCallback).catch(errCallback)
const postItem = body => axios.post(baseURL, body).then(itemsCallback).catch(errCallback)
const deleteItem = id => axios.delete(`${baseURL}/${id}`).then(itemsCallback).catch(errCallback)






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

function createItemCard(post){
    const itemCard = document.createElement('div')
    itemCard.classList.add('card')
    itemCard.innerHTML = `<img alt='item image' src="${post.img}" class="add-item-img"/>
    <p class="brand">${post.brand}</p> 
    <p class="style">${post.style}</p> 
    <p class="season">${post.season}</p>
    <img class="img" src="${post.img}"/>
    `
    mainContainer.appendChild(itemCard)
}

function displayItems(arr) {
    mainContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
    }
}

form.addEventListener("submit", submitHandler)
getPosts()