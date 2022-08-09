const mainContainer = document.querySelector('.container')
// const form = document.getElementById('myForm')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// const seeAllBtn = document.querySelector('#see-all')
const allItemsDiv = document.querySelector('#all-items')


const baseURL = `http://localhost:3000`


const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)

const getPosts = () => axios.get(`${baseURL}/api/posts`).then(itemsCallback).catch(errCallback)



function createItemCard(post){
    console.log(post)
    const itemCard = document.createElement('div')
    itemCard.classList.add('card')
    itemCard.innerHTML = `<img alt='item image' src="${post.img}" class="card-image"/>
    <h2 class="brand">${post.brand}</h2> 
    <h2 class="style">${post.style}</h2> 
    <h2 class="season">${post.season}</h2>
    `
    mainContainer.appendChild(itemCard)
}

function displayItems(arr) {
    mainContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
    }
}

getPosts()






menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// const addItem = (post) => {
//     return `
//         <div class="card">
//         <div class="card-image">
//         <h2>${res.body.brand}</h2>
//         <h2>Style ${res.body.style}</h2>
//         <h2>Season ${res.body.season}</h2>
//         <h2> ${res.body.img}</h2>
//         </div>
//     `
// }

// const getAllItems = () => {
//     axios.get(`${baseURL}/api/posts`)
//     .then((res) => {
//     console.log(res.data);
//     displayItems(res.data);
//     })
//     .catch((err) => console.log(err));
//      };


// function displayItems(arr) {
//     allItemsDiv.innerHTML = ``
//     for (let i = 0; i < arr.length; i++){
//              createItemCard(arr[i])
//             }
//         }
        
// seeAllBtn.addEventListener('click', getAllItems)
// function displayItems (arr) {
//     mainContainer.innerHTML= ``
//     for (let i = 0; i < arr.length; i++) {
//         createItenCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)
// seeAllBtn.addEventListener('click', getAllItems)
