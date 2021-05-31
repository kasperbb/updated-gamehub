const ALL_PRODUCTS_URL = 'https://gamehub-cms.bjorno.dev/wp-json/wc/store/products'
const params = new URLSearchParams(window.location.search);
const search = params.get("search")

let productsArr = []

const title = document.querySelector(".results__title")

document.title += ` - ${search}`
title.innerHTML += ` ${search}`

const fetchSearch = async () => {
    const res = await fetch(`${ALL_PRODUCTS_URL}?search=${search}`)
    const json = await res.json()
    productsArr = json
    return json
}

const populateSearch = async () => {
    const results = document.querySelector("#results")
    const loader = document.querySelector("#loader")
    const res = await fetchSearch()
    results.innerHTML = createProductCardList(res)
    loader.remove()
}

populateSearch().then(() => {
    setUpCartSystem()
})