const mainContainer = document.querySelector('.container')
const form = document.getElementById('myForm')

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const addItemBtn = document.getElementById("add-item-btn")

const baseURL = `http://localhost:3000`


const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)


const postItem = body => {
    axios.post(`${baseURL}/api/posts`, body)
    .then (res => {
        const data = res.data;
        console.log(data);
    });
}




function submitHandler(e) {
    e.preventDefault()

    let brand = document.getElementById('brand')
    let style = document.getElementById('style')
    let season = document.getElementById('season')
    let img = document.getElementById('img')

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

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

form.addEventListener("submit", submitHandler)
