const form = document.querySelector("#contact-form")
let timeout = null

const getFormFields = () => [
    form["email"],
    form["subject"],
    form["message"],
]

const required = (target) => (target.value.trim()) ? true : false;

const minLength = (target, length) => (target.value.trim().length >= length) ? true : false

const minRange = (target, min, max) => (target.value.trim().length >= min && target.value.trim().length <= max) ? true : false

const validEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email.value)
    return patternMatches
}

const validForm = (form) => {
    const [email, subject, message] = getFormFields()
    const arr = [
        validEmail(email),
        minLength(subject, 10),
        minRange(message, 50, 200),
    ]

    const passesValidation = arr.every(el => el)
    return passesValidation;
}

const setErrorStyles = (e) => {
    const parent = e.target ? e.target.parentNode : form[e].parentNode
    parent.classList.add("has-error")
}

const removeErrorStyles = (e) => {
    const parent = e.target ? e.target.parentNode : form[e].parentNode
    parent.classList.remove("has-error")
}

const isValid = (formItemName) => {
    const [email, subject, message] = getFormFields()
    const formItem = form[formItemName]
    switch (formItemName) {
        case email.name:
            return validEmail(formItem)
        case subject.name:
            return minLength(formItem, 10)
        case message.name:
            return minRange(formItem, 50, 200)
        default:
            return false
    }
}

const handleValidate = (e) => {
    const name = e.target.name

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => (!isValid(name)) && setErrorStyles(e), 800)

    if (isValid(name)) removeErrorStyles(e)
}

const controlAllValid = () => {
    const fields = getFormFields()
    fields.forEach(field => {
        isValid(field.name) ? removeErrorStyles(field.name) : setErrorStyles(field.name)
    })
}

const handleSubmit = (e) => {
    const status = document.querySelector(".form-status-message")
    e.preventDefault()
    
    const valid = validForm(form)
    if (!valid) return controlAllValid()
    
    console.log(`valid`, valid)
    console.log(`status`, status)

    status.classList.add("success")
    status.innerHTML = "Your message was successfully sent!"

    setTimeout(() => {
        status.classList.remove("success")
        status.classList.remove("has-error")
        form.reset()
    }, 5000)
}

form.addEventListener("input", handleValidate)
form.addEventListener("submit", handleSubmit)