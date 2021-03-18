window.addEventListener('load', () => {
	shoppingCartModal();
	favoriteModal();
});

const shoppingCartModal = () => {
	const DOM = {
		modal                   : document.querySelector('.modal--shopping-cart'),
		modalButtonShoppingCart : document.querySelectorAll('.modal-button--shopping-cart'),
		modalShoppingCart       : document.querySelector('.modal--shopping-cart'),
		modalClose              : document.querySelector('.modal__close'),
	};

	// Set active panel class
	const setActiveShoppingCartModal = () => {
		DOM.modalShoppingCart.classList.add('active');
	};

	const setInactiveShoppingCartModal = () => {
		DOM.modalShoppingCart.classList.remove('active');
	};

	DOM.modalButtonShoppingCart.forEach(elem => {
		elem.addEventListener('click', event => {
			setActiveShoppingCartModal();
		});
	});

	DOM.modalShoppingCart.addEventListener('click', event => {
		const closeClass = 'modal__close';

		// Check if we click on a nav item
		if (event.target.classList.contains(closeClass) || event.target.classList.contains('back')) {
			// Set active panel
			setInactiveShoppingCartModal();
		}
	});

	// Exit if background is clicked
	DOM.modal.addEventListener('click', event => {
		if (event.target.classList.contains('modal')) {
			setInactiveShoppingCartModal();
		}
	});
};

const favoriteModal = () => {
	const DOM = {
		modal               : document.querySelector('.modal--favorite'),
		modalButtonFavorite : document.querySelectorAll('.modal-button--favorite'),
		modalFavorite       : document.querySelector('.modal--favorite'),
		modalClose          : document.querySelector('modal__close'),
	};

	// Set active panel class
	const setActiveFavoriteModal = () => {
		DOM.modalFavorite.classList.add('active');
	};

	const setInactiveFavoriteModal = () => {
		DOM.modalFavorite.classList.remove('active');
	};

	DOM.modalButtonFavorite.forEach(elem => {
		elem.addEventListener('click', event => {
			setActiveFavoriteModal();
		});
	});

	DOM.modalFavorite.addEventListener('click', event => {
		const closeClass = 'modal__close';

		// Check if we click on a nav item
		if (event.target.classList.contains(closeClass) || event.target.classList.contains('back')) {
			// Set active panel
			setInactiveFavoriteModal();
		}
	});

	// Exit if background is clicked
	DOM.modal.addEventListener('click', event => {
		if (event.target.classList.contains('modal')) {
			setInactiveFavoriteModal();
		}
	});
};
