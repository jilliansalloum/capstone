const mainContainer = document.querySelector('.container')

const baseURL = `http://localhost:3000`

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)

const getPosts = () => axios.get(`${baseURL}/api/posts`).then(itemsCallback).catch(errCallback)


getPosts()



menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

