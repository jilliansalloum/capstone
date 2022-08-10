const mainContainer = document.querySelector('.container')
// const form = document.getElementById('myForm')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const allItemsDiv = document.querySelector('#all-items')


const baseURL = `http://localhost:3000`

const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)

const searchBtn = document.getElementById("search-button")
form.addEventListener("submit", submitsearchHandler);

const getPosts = () => axios.get(`${baseURL}/api/posts`).then(itemsCallback).catch(errCallback)


function displayItems(arr) {
    mainContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
    }
}
function submitsearchHandler(e) {
    e.preventDefault();
    let searchradio = document.querySelector(".searchradio");
    let searchform = document.querySelector(".searchform");
    axios.get(`/api/search.html?searchradio=${searchradio.value}&searchform=${searchform.value}`,).then(itemsCallback).catch(errCallback);
    searchradio.value = "";
    searchform.value = "";
  }
// const getPosts = () => axios.get(baseURL).then(itemsCallback).catch(errCallback)
// const postItem = body => axios.post(baseURL, body).then(itemsCallback).catch(errCallback)
// const deleteItem = id => axios.delete(`${baseURL}/${id}`).then(itemsCallback).catch(errCallback)






// function submitHandler(e) {
//     e.preventDefault()

//     let brand = document.querySelector('#brand')
//     let style = document. querySelector ("#style")
//     let season = document. querySelector("#season")
//     let img = document. querySelector ("#img")

//     let body = {
//         brand: brand.value,
//         style: style.value,
//         season: season.value,
//         img: img.value
//     }

//     postItem(body)
//         brand.value = ""
//         style.value = ""
//         season.value = ""
//         img.value = ""
    
// }

// function createItemCard(post){
//     const itemCard = document.createElement('div')
//     itemCard.classList.add('card')
//     itemCard.innerHTML = `<img alt='item image' src="${post.img}" class="add-item-img"/>
//     <p class="brand">${post.brand}</p> 
//     <p class="style">${post.style}</p> 
//     <p class="season">${post.season}</p>
//     <img class="img" src="${post.img}"/>
//     `
//     mainContainer.appendChild(itemCard)
// }

// function displayItems(arr) {
//     mainContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++){
//         createItemCard(arr[i])
//     }
// }

// form.addEventListener("submit", submitHandler)
// getPosts()