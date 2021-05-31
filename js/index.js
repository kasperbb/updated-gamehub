const ALL_PRODUCTS_URL = 'https://gamehub-cms.bjorno.dev/wp-json/wc/store/products';

let productsArr = [];

const fetchProducts = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    productsArr = json;
    return json;
}

const populateProductCards = async () => {
    const containerElements = document.querySelectorAll(".addProductCards");
    const res = await fetchProducts(ALL_PRODUCTS_URL);
    containerElements.forEach(el => {
        el.innerHTML = createProductCardList(res.slice(0, 8));
    })
    
}

// const populateProductCards = (products) => {
//     const containerElements = document.querySelectorAll(".addProductCards");
//     containerElements.forEach(el => {
//         el.innerHTML = createProductCardList(products);
//     })
// }

// populateProductCards(productsArr);
populateProductCards().then(() => {
    setUpCartSystem();
})
// populateProductCards();

