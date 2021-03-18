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
