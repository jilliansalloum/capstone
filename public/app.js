const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const seeAllBtn = document.querySelector('#see-all')
const allItemsDiv = document.querySelector('#all-items')



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
    return `
        <div class="card">
        <img src='${item.imgAddress}' alt='${item.name}'/>
        <h3>${bot.name}</h3>
        <h4>Health: ${bot.health}</h4>
        <p>Attack 1: ${bot.attacks[0].damage} damage</p>
        <p>Attack 2: ${bot.attacks[1].damage} damage</p>
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
