const mainContainer = document.querySelector('#main_container')
const form = document.querySelector('form')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const seeAllBtn = document.querySelector('#see-all')
const allItemsDiv = document.querySelector('#all-items')

const addItemBtn = document.getElementById("add-item-btn")

const baseURL = `https://lfsmxwif.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == 'post']'
`
const itemsCallback = ({data : items}) => displayItems(items)
const errCallback = err => console.log(err)


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const addItem = (item) => {
    return `
        <div class="card">
        <div class="card-image">
        <h2>${result.name}</h2>
        <h2>Style ${result[1][5].title}</h2>
        <h2>Season</h2>
        <h2>Material</h2>
        </div>
    `
}
const makeItemDisplayCard = (item) => {
    input = select(".form-labels")
    return `
        <div class="card">
        
        </div>
    `
}
const getAllItems = () => {
    axios.get(`/data/query/production?query=*[_type == 'post']`)
        .then(({data}) => {
            allItemsDiv.innerHTML = ''
        
            data.forEach(item => {
                let itemHtml = makeItemDisplayCard(item)
                allItemsDiv.innerHTML += itemHtml
            })
        })
}

seeAllBtn.addEventListener('click', getAllItems)


const postItem = body => axios.post (baseURL, body) .then(itemsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let company = document.querySelector('#company')
    let line = document.querySelector("#line")
    let season = document. querySelector("#season")
    let style = document. querySelector ("#style")
    let img = document. querySelector ("#img")

    let body = {
        company: company.value,
        line: line.value,
        season: season.value,
        style: style.value,
        img: img.value
    }

    postItem(body)
        company.value = ""
        line.value = ""
        season.value = ""
        style.value = ""
        img.value = ""
    
}

function displayItems (arr) {
    mainContainer.innerHTML= ``
    for (let i = 0; i < arr.length; i++) {
        createItenCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
seeAllBtn.addEventListener('click', getAllItems)