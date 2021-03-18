window.addEventListener('load', () => {
	hamburgerClicked();
});

const hamburgerClicked = () => {
	const DOM = {
		hamburgerIcon : document.querySelector('#hamburger'),
		nav           : document.querySelector('#nav'),
	};

	DOM.hamburgerIcon.addEventListener('click', event => {
		if (!DOM.nav.classList.contains('show')) {
			DOM.nav.classList.add('show');
		} else {
			DOM.nav.classList.remove('show');
		}
	});
};
