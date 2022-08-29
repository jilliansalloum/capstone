const mainContainer1 = document.querySelector('.container')

const baseURL = `http://localhost:3000`

const itemsCallback = ({data : posts}) => displayItems(posts)
const errCallback = err => console.log(err)

const searchBtn = document.getElementById("search-icon-img")

function submitsearchHandler(e) {
    e.preventDefault();
    let searchradio = document.querySelector('input[name="fav_language"]:checked').value;
    let searchform = document.querySelector(".searchform");
    console.log(searchradio.value, searchform.value)
    axios.get(`${baseURL}/api/search/${searchradio}/${searchform.value}`).then(itemsCallback).catch(errCallback);
    searchradio.value = "";
    searchform.value = "";
}

searchBtn.addEventListener("click", submitsearchHandler);
