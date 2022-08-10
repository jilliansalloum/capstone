function createItemCard(post){
    console.log(post)
    const itemCard = document.createElement('div')
    itemCard.classList.add('card')
    itemCard.innerHTML = `<img alt='item image' src="${post.img}" class="card-image"/>
    <h2 class="brand" data-brand>${post.brand}</h2> 
    <h2 class="style" data-style>${post.style}</h2> 
    <h2 class="season" data-season>${post.season}</h2>
    `
    mainContainer.appendChild(itemCard)
}

function displayItems(arr) {
    mainContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
    }
}
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const allItemsDiv = document.querySelector('#all-items')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})