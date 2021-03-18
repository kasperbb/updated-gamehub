const DOM = {
    form: document.querySelector("#contact-form"),
    button: document.querySelector("#contact-form button"),
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

validEmail = (email) => {
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

const setErrorStyles = (target, addOrRemove) => {
    if (addOrRemove) {
        target.nextElementSibling.style.display = "block";
        target.style.border = "1px solid rgba(255, 0, 0, 0.5)";
    } else {
        target.nextElementSibling.style.display = "none";
        target.style.border = "none";
    }
}

const validateForm = (form) => {
    let arr = [
        validEmail(form["email"]),
        minLength(form["subject"], 10),
        minRange(form["message"], 50, 200),
    ];

    let passesValidation = arr.every(el => el);

    return passesValidation;
}

DOM.form.addEventListener('focus', (event) => {
    event.target.classList.add("touched");
}, true);

DOM.form.addEventListener("input", (event) => {
    let form = event.target.parentElement.parentElement;

    let passesValidation = validateForm(form);

    DOM.button.disabled = !passesValidation;
});