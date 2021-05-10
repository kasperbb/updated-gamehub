const ALL_PRODUCTS_URL = 'https://gamehub-cms.bjorno.dev/wp-json/wc/store/products';
const params = new URLSearchParams(window.location.search);
const ID = params.get("id");

const imageConatiner = document.querySelector(".product__image");
const imagesContainer = document.querySelector(".product__images");
const titleContainer = document.querySelector(".product__title");
const priceContainer = document.querySelector(".product__price");
const descriptionContainer = document.querySelector(".product__description");
const buyNowButtonContainer = document.querySelector(".buy-now-button");

const productInfoDescriptionContainer = document.querySelector(".product-information__description");
const productInfoSystemReqContainer = document.querySelector(".product-information__system-requirements");

const loader = document.querySelector(".loader-wrapper");

let productsArr = [];

const fetchProducts = async (url) => {
	const res = await fetch(url);
	const json = await res.json();
	productsArr = json;
	return json;
}

const fetchProduct = async () => {
	const res = await fetch(`${ALL_PRODUCTS_URL}/${ID}`);
	const json = await res.json();
	return json;
}

const populateProduct = async () => {
	const product = await fetchProduct();

	for (let i = 1; i < product.images.length; i++) {
		imagesContainer.innerHTML += `<img src="${product.images[i].src}" alt="In-game image of ${product.name}" />`;
	}

	imageConatiner.innerHTML = `<img src="${product.images[0].src}" alt="Game cover for ${product.name}" />`;
	titleContainer.innerHTML = product.name;
	priceContainer.innerHTML = product.prices.currency_symbol + product.prices.price;
	descriptionContainer.innerHTML = product.description.substring(0, 200) + "...";
	buyNowButtonContainer.href = `new-checkout.html?id=${ID}`;

	productInfoDescriptionContainer.innerHTML = product.description;
	productInfoSystemReqContainer.innerHTML = product.short_description;

	loader.style.display = "none";
}

const populateProductCards = async () => {
	const containerElements = document.querySelectorAll(".addProductCards");
	const res = await fetchProducts(ALL_PRODUCTS_URL);
	containerElements.forEach(el => {
		el.innerHTML = createProductCardList(res);
	})
}

populateProduct();

populateProductCards().then(() => {
	setUpCartSystem();
});

window.addEventListener('load', () => {
	tabsFunc();
});

const tabsFunc = () => {
	const DOM = {
		tabsNav      : document.querySelector('.tabs__nav'),
		tabsNavItems : document.querySelectorAll('.tabs__nav-item'),
		panels       : document.querySelectorAll('.tabs__panel'),
	};

	// Set active nav element
	const setActiveItem = elem => {
		DOM.tabsNavItems.forEach(el => {
			el.classList.remove('active');
		});

		elem.classList.add('active');
	};

	// Set active panel class
	const setActivePanel = index => {
		DOM.panels.forEach(el => {
			el.classList.remove('active');
		});

		DOM.panels[index].classList.add('active');
	};

	// Click nav item function
	DOM.tabsNav.addEventListener('click', event => {
		const navElemClass = 'tabs__nav-item';

		// Check if we click on a nav item
		if (event.target.classList.contains(navElemClass)) {
			const clickedTab = event.target;

			const activeItemIndex = Array.from(DOM.tabsNavItems).indexOf(clickedTab);

			// Set active nav item
			setActiveItem(clickedTab);

			// Set active panel
			setActivePanel(activeItemIndex);
		}
	});
};
