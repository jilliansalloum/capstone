const mainContainer = document.querySelector('.container')

const baseURL = `http://localhost:3000`

const menu1 = document.querySelector('#mobile-menu')
const menu1Links = document.querySelector('.navbar__menu')

const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)

const getPosts = () => axios.get(`${baseURL}/api/posts`).then(itemsCallback).catch(errCallback)


getPosts()



menu1.addEventListener('click', function() {
    menu1.classList.toggle('is-active');
    menu1Links.classList.toggle('active');
})

