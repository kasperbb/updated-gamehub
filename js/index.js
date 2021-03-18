const productsArr = [
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
]

// When you click on the shopping cart button on a product card
// add a number to the notification icon on the shopping cart
// in the header
const populateProductCards = (products) => {
    const containerElements = document.querySelectorAll(".addProductCards");
    containerElements.forEach(el => {
        el.innerHTML = createProductCardList(products);
    })
}

const animateIcon = () => {
    const notificationIcon = document.querySelector(".notification-icon");
    const prevVal = parseInt(notificationIcon.innerHTML);
    notificationIcon.innerHTML = prevVal + 1;
    notificationIcon.classList.add("animate-icon");
    const timeout = setTimeout(() => {
        notificationIcon.classList.remove("animate-icon");
        clearTimeout(timeout);
    }, 1000);
}

const findProductCardById = (id) => {
    return productsArr.find(el => parseInt(el.id) === parseInt(id));
}

const guidGenerator = () => {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

const onAddToCart = (e) => {
    let productCard = null;
    if (e.target.classList.contains("fas")) {
        productCard = e.target.parentElement.parentElement.parentElement.parentElement;
    } else {
        productCard = e.target.parentElement.parentElement.parentElement;
    }

    animateIcon();

    if (productCard !== null) {
        const productCardData = findProductCardById(productCard.dataset.id);
        const previousStorage = JSON.parse(localStorage.getItem('products'));
        productCardData["removeId"] = guidGenerator();
        console.log(productCardData);
        if (previousStorage === null) {
            localStorage.setItem('products', JSON.stringify([productCardData]));
        } else {
            localStorage.setItem('products', JSON.stringify([...previousStorage, productCardData]));
        }
    }
}

const setNotificationIconAmount = () => {
    const localStorageProducts = JSON.parse(localStorage.getItem('products'));
    const shoppingCartNotificationIcon = document.querySelector("#shoppingCartNotificationIcon");
    if (localStorageProducts !== null) {
        shoppingCartNotificationIcon.innerHTML = localStorageProducts.length;
    } else {
        shoppingCartNotificationIcon.innerHTML = 0;
    }
}

const addEventsToButtons = () => {
    const shoppingCartButtons = document.querySelectorAll(".shopping-cart-button");
    shoppingCartButtons.forEach(button => {
        button.addEventListener('click', e => {
            onAddToCart(e);
        });
    });
}

populateProductCards(productsArr);
setNotificationIconAmount();
addEventsToButtons();

