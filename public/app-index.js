const mainContainer = document.querySelector('.container')

const baseURL = `http://localhost:3000`


const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)

const getPosts = () => axios.get(`${baseURL}/api/posts`).then(itemsCallback).catch(errCallback)


getPosts()




