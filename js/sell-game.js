window.addEventListener('load', () => {
    formWizard();
});

const formWizard = () => {
    const DOM = {
        card: document.querySelector('.card'),
        cardNavItems: document.querySelectorAll('.card__nav'),
        cardForms: document.querySelectorAll('.card__form'),
    };

    // Set active nav element
    const setActiveNav = elem => {
        DOM.cardNavItems.forEach(el => {
            el.classList.remove('active');
        });

        elem.classList.add('active');
    };

    // Set active nav element
    const setActiveNavIndex = index => {
        DOM.cardNavItems.forEach(el => {
            el.classList.remove('active');
        });

        DOM.cardNavItems[index].classList.add('active');
    };

    // Set active form class
    const setActiveForm = index => {
        DOM.cardForms.forEach(el => {
            el.classList.remove('active');
        });

        DOM.cardForms[index].classList.add('active');
    };

    // Click nav item function
    DOM.card.addEventListener('click', event => {

        // Check if we click on a nav item
        if (event.target.classList.contains('card__nav')) {
            const clickedItem = event.target;            

            // Get the index for the clicked nav item
            const activeClickedItemIndex = Array.from(DOM.cardNavItems).indexOf(clickedItem);

            // Set active nav item
            setActiveNav(clickedItem);

            // Set active form
            setActiveForm(activeClickedItemIndex);
        }

        // Go next if next button is clicked
        if (event.target.classList.contains('next-button')) {
            // Get the currently active form
            const activeItemElem = Array.from(DOM.cardForms).find(el => el.classList.contains('active'));

            // Get the index for the currently active form
            const activeItemIndex = Array.from(DOM.cardForms).indexOf(activeItemElem);

            // Set active nav item
            setActiveNavIndex(activeItemIndex + 1);

            // Set active form
            setActiveForm(activeItemIndex + 1);
        }

        // Go back if back button is clicked
        if (event.target.classList.contains('back-button')) {
            // Get the currently active form
            const activeItemElem = Array.from(DOM.cardForms).find(el => el.classList.contains('active'));

            // Get the index for the currently active form
            const activeItemIndex = Array.from(DOM.cardForms).indexOf(activeItemElem);

            // Set active nav item
            setActiveNavIndex(activeItemIndex - 1);

            // Set active form
            setActiveForm(activeItemIndex - 1);
        }
    });
};