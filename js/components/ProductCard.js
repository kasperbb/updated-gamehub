// With favorites and shopping-cart buttons
const createProductCard = (product) => `
    <div class="product-card" data-id="${product.id}">
        <a href="product.html?id=${product.id}">
            <img src="${product.images[0].src}" alt="Game cover for ${product.name}">
        </a>
        <div class="product-card__title">
            <a href="product.html?id=${product.id}">${product.name}</a>
            <p>${product.categories.map(category => category.name).join(", ")}</p>
        </div>
        <div class="product-card__body">
            <div class="product-card__price">
                ${product.prices.currency_prefix + parseInt(product.prices.price).toFixed(2)}
            </div>
            <div class="product-card__actions">
                <button class="favorite-button modal-button--favorite">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="shopping-cart-button modal-button--shopping-cart">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </div>
`;

const createProductCardList = (products) => {
    return products.map(product => createProductCard(product)).join("");
}

// With remove from cart button
const createProductCardWithRemoveButton = (product) => `
    <div class="product-card" data-id="${product.id}" data-removeid="${product.removeId}">
        <a href="product.html?id=${product.id}">
            <img src="${product.images[0].src}" alt="Game cover for ${product.name}">
        </a>
        <div class="product-card__title">
            <a href="product.html?id=${product.id}">${product.name}</a>
            <p>PS4</p>
        </div>
        <div class="product-card__body">
            <div class="product-card__price">
                ${product.prices.currency_prefix + parseInt(product.prices.price).toFixed(2)}
            </div>
            <div class="product-card__actions">
                <button class="shopping-cart-button modal-button--shopping-cart remove-button" aria-label="Remove from cart">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </div>
`;

const createProductCardListWithRemoveButton = (products) => {
    return products.map(product => createProductCardWithRemoveButton(product)).join("");
}