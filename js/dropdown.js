window.addEventListener('load', () => {
	navDropdown();
});

const navDropdown = () => {
	const DOM = {
		overlay        : document.querySelector('#dropdown-overlay'),
		dropdownButton : document.querySelector('.dropdown-button'),
		dropdownPanel  : document.querySelector('.dropdown'),
	};

	// Remove hidden class from dropdown panel
	const hiddenClass = elem => {
		if (elem.classList.contains('hidden')) {
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}

		if (DOM.overlay.classList.contains('active')) {
			DOM.overlay.classList.remove('active');
		} else {
			DOM.overlay.classList.add('active');
		}

		if (DOM.dropdownButton.classList.contains('active')) {
			DOM.dropdownButton.classList.remove('active');
		} else {
			DOM.dropdownButton.classList.add('active');
		}
	};

	DOM.dropdownButton.addEventListener('click', event => {
		hiddenClass(DOM.dropdownPanel);
	});

	DOM.overlay.addEventListener('click', event => {
		hiddenClass(DOM.dropdownPanel);
	});
};
