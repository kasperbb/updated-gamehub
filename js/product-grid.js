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
        DOM.priceOutput.innerHTML = '$' + DOM.priceRange.value;
    }
};

const productsArrAlt = [
    {
        id: 0,
        image: "images/game-covers/destiny_2.jpg",
        name: "Destiny 2",
        price: "$60",
    },
    {
        id: 1,
        image: "images/game-covers/cyberpunk_2077.jpg",
        name: "Cyberpunk 2077",
        price: "$60"
    },
    {
        id: 2,
        image: "images/game-covers/call_of_duty_infinite_warfare.jpg",
        name: "Call of Duty: Infinite Warfare",
        price: "$60"
    },
    {
        id: 3,
        image: "images/game-covers/assassins_creed_odyssey.png",
        name: "Assassin's Creed Odyssey",
        price: "$60"
    },
    {
        id: 4,
        image: "images/game-covers/fifa_21_standard_edition.jpg",
        name: "FIFA 21 Standard Edition",
        price: "$60"
    },
    {
        id: 5,
        image: "images/game-covers/destiny_2.jpg",
        name: "Destiny 2",
        price: "$60",
    },
    {
        id: 6,
        image: "images/game-covers/cyberpunk_2077.jpg",
        name: "Cyberpunk 2077",
        price: "$60"
    },
    {
        id: 7,
        image: "images/game-covers/call_of_duty_infinite_warfare.jpg",
        name: "Call of Duty: Infinite Warfare",
        price: "$60"
    },
    {
        id: 8,
        image: "images/game-covers/assassins_creed_odyssey.png",
        name: "Assassin's Creed Odyssey",
        price: "$60"
    },
    {
        id: 9,
        image: "images/game-covers/fifa_21_standard_edition.jpg",
        name: "FIFA 21 Standard Edition",
        price: "$60"
    },
    {
        id: 10,
        image: "images/game-covers/destiny_2.jpg",
        name: "Destiny 2",
        price: "$60",
    },
    {
        id: 11,
        image: "images/game-covers/cyberpunk_2077.jpg",
        name: "Cyberpunk 2077",
        price: "$60"
    },
    {
        id: 12,
        image: "images/game-covers/call_of_duty_infinite_warfare.jpg",
        name: "Call of Duty: Infinite Warfare",
        price: "$60"
    },
    {
        id: 13,
        image: "images/game-covers/assassins_creed_odyssey.png",
        name: "Assassin's Creed Odyssey",
        price: "$60"
    },
    {
        id: 14,
        image: "images/game-covers/fifa_21_standard_edition.jpg",
        name: "FIFA 21 Standard Edition",
        price: "$60"
    },
];

const populateProductCards = (products) => {
    const containerElements = document.querySelectorAll(".addProductCards");
    containerElements.forEach(el => {
        el.innerHTML = createProductCardList(products);
    })
}

populateProductCards(productsArrAlt);