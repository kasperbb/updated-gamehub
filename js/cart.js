const products = JSON.parse(localStorage.getItem('products'));

const populateCartContent = () => {
    const cartContents = document.querySelector(".cart-contents");        
    cartContents.innerHTML = createProductCardListWithRemoveButton(products);
}

const populateAmount = () => {
    const productCounts = document.querySelectorAll(".product-count");
    productCounts.forEach(el => {
        el.innerHTML = products.length;
    });
}

const populateDelivery = () => {
    const deliveryContainer = document.querySelector("#delivery");
    const summaryForm = document.querySelector("#summaryForm");
    summaryForm.addEventListener("input", () => {
        if (+summaryForm["delivery"].value === 0) {
            deliveryContainer.innerHTML = 'Free';
        } else {
            deliveryContainer.innerHTML = '$' + +summaryForm["delivery"].value;
        }
    });
}

const calculatePrice = () => {
    const subtotalContainer = document.querySelector("#subtotal");
    const totalContainer = document.querySelector("#total");
    const summaryForm = document.querySelector("#summaryForm");
    subtotalContainer.innerHTML = '$' + products.length * 60;
    totalContainer.innerHTML = '$' + products.length * 60;
    summaryForm.addEventListener("input", () => {
        subtotalContainer.innerHTML = '$' + (products.length * 60 + +summaryForm["delivery"].value).toString();
        totalContainer.innerHTML = '$' + (products.length * 60 + +summaryForm["delivery"].value).toString();
    });
}

const removeProductCardData = (removeId) => {
    const index = products.findIndex(el => el.removeId.toString() === removeId.toString());
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
}

const addRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach(el => {
        el.addEventListener("click", e => {
            let productCard = null;
            if (e.target.classList.contains("fas")) {
                productCard = e.target.parentElement.parentElement.parentElement.parentElement;
            } else {
                productCard = e.target.parentElement.parentElement.parentElement;
            }
            removeProductCardData(productCard.dataset.removeid);
            productCard.remove();
            calculatePrice();
            populateAmount();
        })
    })
}

populateCartContent();
populateDelivery()
populateAmount();
calculatePrice();
addRemoveEvents();