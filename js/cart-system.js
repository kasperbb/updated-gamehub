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

    console.log(`productCard`, productCard)

    animateIcon();

    if (productCard !== null) {
        const productCardData = findProductCardById(productCard.dataset.id);
        const previousStorage = JSON.parse(localStorage.getItem('products'));
        console.log(findProductCardById(productCard.dataset.id))
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

const setUpCartSystem = () => {
    addEventsToButtons();
    setNotificationIconAmount();
}