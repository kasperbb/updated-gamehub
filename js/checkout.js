const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

const ALL_PRODUCTS_URL = 'https://gamehub-cms.bjorno.dev/wp-json/wc/store/products';
const params = new URLSearchParams(window.location.search);
const ID = params.get("id");

const products = JSON.parse(localStorage.getItem('products'));
let product = null;

const DOM = {
    billingForm: document.querySelector("#billingForm"),
    paymentMethodForm: document.querySelector("#paymentMethodForm"),
    button: document.querySelector("#placeOrder"),
    countrySelect: document.querySelector("#country"),
    summaryOrders: document.querySelector(".summary .orders"),
    returnToCart: document.querySelector(".return-to-cart")
}

if (ID !== null) {
    DOM.returnToCart.innerHTML = `<i class="fas fa-angle-left"></i> Return to product`;
    DOM.returnToCart.href = `product.html?id=${ID}`;
} 

const required = (target) => {
    if (!target.classList.contains("touched")) return;
    if (target.value.trim()) {
        setErrorStyles(target, false);
        return true;
    } else {
        setErrorStyles(target, true);
        return false;
    }
}

const minLength = (target, length) => {
    if (!target.classList.contains("touched")) return;
    if (target.value.trim().length >= length) {
        setErrorStyles(target, false);
        return true;
    } else {
        setErrorStyles(target, true);
        return false;
    }
}

const minRange = (target, min, max) => {
    if (!target.classList.contains("touched")) return;
    if (target.value.trim().length >= min && target.value.trim().length <= max) {
        setErrorStyles(target, false);
        return true;
    } else {
        setErrorStyles(target, true);
        return false;
    }
}

const validEmail = (email) => {
    if (!email.classList.contains("touched")) return;
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email.value);
    if (patternMatches) {
        setErrorStyles(email, false);
    } else {
        setErrorStyles(email, true);
    }
    return patternMatches;
}

const validCardNumber = (cardNumber) => {
    if (!cardNumber.classList.contains("touched")) return;
    const regEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    const patternMatches = regEx.test(cardNumber.value.replace(/[^a-zA-Z0-9]/g, ''));
    if (patternMatches) {
        setErrorStyles(cardNumber, false);
    } else {
        setErrorStyles(cardNumber, true);
    }
    return patternMatches;
}

const validCardDate = (cardDate) => {
    if (!cardDate.classList.contains("touched")) return;
    const regEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const patternMatches = regEx.test(cardDate.value);
    if (patternMatches) {
        setErrorStyles(cardDate, false);
    } else {
        setErrorStyles(cardDate, true);
    }
    return patternMatches;
}

const validCVC = (cvc) => {
    if (!cvc.classList.contains("touched")) return;
    const regEx = /[0-9]{3}/;
    const patternMatches = regEx.test(cvc.value);
    if (patternMatches) {
        setErrorStyles(cvc, false);
    } else {
        setErrorStyles(cvc, true);
    }
    return patternMatches;
}

const setErrorStyles = (target, addOrRemove) => {
    if (addOrRemove) {
        target.nextElementSibling.style.display = "block";
        target.style.border = "2px solid rgba(255, 0, 0, 0.5)";
    } else {
        target.nextElementSibling.style.display = "none";
        target.style.border = "2px solid var(--light-gray)";
    }
}

const validateForm = (form) => {
    let arr = [
        required(billingForm["firstName"]),
        required(billingForm["lastName"]),
        validEmail(billingForm["email"]),
        minLength(billingForm["address"], 5),
        minRange(billingForm["zipCode"], 4, 9),
        validCardNumber(paymentMethodForm["cardNumber"]),
        required(paymentMethodForm["cardHolder"]),
        validCardDate(paymentMethodForm["expiration"]),
        validCVC(paymentMethodForm["cvc"]),
    ];

    let passesValidation = arr.every(el => el);

    return passesValidation;
}

DOM.billingForm.addEventListener('focus', (event) => {
    event.target.classList.add("touched");
}, true);

DOM.paymentMethodForm.addEventListener('focus', (event) => {
    event.target.classList.add("touched");
}, true);

DOM.billingForm.addEventListener("input", (event) => {
    let form = event.target.parentElement.parentElement;
    let passesValidation = validateForm(form);
    DOM.button.disabled = !passesValidation;
});

DOM.paymentMethodForm.addEventListener("input", (event) => {
    let form = event.target.parentElement.parentElement;
    let passesValidation = validateForm(form);
    DOM.button.disabled = !passesValidation;
});

const calculatePrice = () => {
    const subtotalContainer = document.querySelector("#subtotal");
    const totalContainer = document.querySelector("#total");
    const summaryForm = document.querySelector("#summaryForm");

    const currencySymbol = products[0]?.prices.currency_symbol || "£";

    let totalPrice = products.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr.prices.price);
    }, 0)

    if (ID !== null) {
        totalPrice = parseInt(product.prices.price);
    }

    subtotalContainer.innerHTML = currencySymbol + totalPrice;
    totalContainer.innerHTML = currencySymbol + totalPrice;
    summaryForm.addEventListener("input", () => {
        subtotalContainer.innerHTML = currencySymbol + (totalPrice + +summaryForm["delivery"].value).toString();
        totalContainer.innerHTML = currencySymbol + (totalPrice + +summaryForm["delivery"].value).toString();
    });
}

const populateSelectWithCountries = (countries) => {
    DOM.countrySelect.innerHTML = countries.map(country => `<option value=${country}>${country}</option>`);
}

const populateSummaryOrders = (orders) => {
    if (ID === null) {
        let obj = {}
        orders.forEach(order => {
            if (obj.hasOwnProperty(order.name)) {
                obj[order.name] = obj[order.name] + 1;
            } else {
                obj[order.name] = 1;
            }
        })
        Object.keys(obj).map((key, val) => {
            DOM.summaryOrders.innerHTML += `
                <div class="order-item">
                    <span>${key}</span>
                    <span>x${obj[key]}</span>
                </div>
            `;
        })
    } else {
        DOM.summaryOrders.innerHTML += `
            <div class="order-item">
                <span>${product.name}</span>
                <span>x1</span>
            </div>
        `;      
    }    
}

const fetchProduct = async () => {
    const res = await fetch(`${ALL_PRODUCTS_URL}/${ID}`);
    const json = await res.json();
    product = json;
    return json;
}

const fetchProductFirst = () => {
    return new Promise((fulfill, reject) => {
        const res = fetchProduct();
        fulfill(res);
        reject(error);
    });
}

if (ID === null) {
    populateSelectWithCountries(countryList);
    populateSummaryOrders(products);
    calculatePrice();
} else {
    fetchProductFirst().then(() => {
        populateSelectWithCountries(countryList);
        populateSummaryOrders(products);
        calculatePrice();
    })
}

