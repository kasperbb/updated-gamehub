const ALL_PRODUCTS_URL = 'https://gamehub-cms.bjorno.dev/wp-json/wc/store/products';

let PRODUCTS = [];

const fetchProducts = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    PRODUCTS = json;
    console.log('Products:', json);
    return json;
}

window.addEventListener('load', () => {
    gridList();
    moreOptions();
    priceRange();
});

const gridList = () => {
    const DOM = {
        topBarView: document.querySelector('.top-bar__view'),
        viewIcons: document.querySelectorAll('.view__icon'),
        productGrid: document.querySelector('#product-grid'),
    };

    const setActiveIcon = elem => {
        DOM.viewIcons.forEach(el => {
            el.classList.remove('active');
        });

        elem.classList.add('active');
    };

    const changeToGrid = () => {
        DOM.productGrid.classList.add('product-grid');
        DOM.productGrid.classList.remove('product-list');
    }

    const changeToList = () => {
        DOM.productGrid.classList.add('product-list');
        DOM.productGrid.classList.remove('product-grid');
    }

    DOM.topBarView.addEventListener('click', event => {

        // Check if we click on an icon
        if (event.target.classList.contains('view__icon')) {
            const clickedIcon = event.target;

            // Set active nav item
            setActiveIcon(clickedIcon);

            // Check if we click on grid
            if (event.target.classList.contains('fa-th')) {
                changeToGrid();
            }

            // Check if we click on list
            if (event.target.classList.contains('fa-th-list')) {
                changeToList();
            }
        }
    });
};

const moreOptions = () => {
    const DOM = {
        moreOptionsButton: document.querySelector('.more-options'),
        categories: document.querySelector('.categories'),
        priceRange: document.querySelector('.price-range'),
    };

    DOM.moreOptionsButton.addEventListener('click', event => {
        if (DOM.categories.classList.contains('active') && DOM.priceRange.classList.contains('active')) {
            DOM.categories.classList.remove('active');
            DOM.priceRange.classList.remove('active');
        } else {
            DOM.categories.classList.add('active');
            DOM.priceRange.classList.add('active');
        }
    });
};

const priceRange = () => {
    const DOM = {
        priceRange: document.querySelector('#price-range'),
        priceOutput: document.querySelector('#price-output'),
    };

    DOM.priceRange.oninput = () => {
        DOM.priceOutput.innerHTML = `$0 - ${DOM.priceRange.value}`;
        populateProductCards(filterProductsByPrice(PRODUCTS, parseInt(DOM.priceRange.value)));
    }
};

const filterProductsByPrice = (products, price) => {
    return products.filter(product => parseInt(product.prices.price) <= price);
}

const populateProductCards = (products) => {
    const containerElements = document.querySelectorAll(".addProductCards");
    containerElements.forEach(el => {
        el.innerHTML = createProductCardList(products);
    })
}

const populateAndFetch = async () => {
    const products = await fetchProducts(ALL_PRODUCTS_URL);
    populateProductCards(products)
}

populateAndFetch();