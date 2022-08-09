// const mainContainer = document.querySelector('#main_container')
// const form = document.getElementById('myForm')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// const seeAllBtn = document.querySelector('#see-all')
const allItemsDiv = document.querySelector('#all-items')


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

getPosts()






// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// })

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
