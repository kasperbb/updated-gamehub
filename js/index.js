const ALL_PRODUCTS_URL = 'https://gamehub-cms.bjorno.dev/wp-json/wc/store/products';

let productsArr = [];

const fetchProducts = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    productsArr = json;
    console.log('Products:', json);
    return json;
}

const populateProductCardsFirst = () => {
    return new Promise((fulfill, reject) => {
        const res = populateProductCards();
        fulfill(res);
        reject(error);
    });
}

const populateProductCards = async () => {
    const containerElements = document.querySelectorAll(".addProductCards");

    const res = await fetchProducts(ALL_PRODUCTS_URL);

    containerElements.forEach(el => {
        el.innerHTML = createProductCardList(res);
    })
    
}

// const populateProductCards = (products) => {
//     const containerElements = document.querySelectorAll(".addProductCards");
//     containerElements.forEach(el => {
//         el.innerHTML = createProductCardList(products);
//     })
// }

// populateProductCards(productsArr);
populateProductCardsFirst().then(res => {
    setUpCartSystem();
});
// populateProductCards();

