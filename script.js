const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    0: getRandomLower,
    1: getRandomUpper,
    2: getRandomNumber,
    3: getRandomSymbol
}



generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

})

function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {

    let password = "";

    for (let i = 0; i < length;) {

        const number = Math.floor(Math.random() * Object.keys(randomFunc).length)
        if (number === 0 && hasLower) {
            password += randomFunc[number]();
            i++
        }
        else if (number === 1 && hasUpper) {
            password += randomFunc[number]();
            i++
        }
        else if (number === 2 && hasNumber) {
            password += randomFunc[number]();
            i++
        }
        else if (number === 3 && hasSymbol) {
            password += randomFunc[number]();
            i++
        }





    }

    return password


}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}


function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}



//https://www.w3schools.com/charsets/ref_utf_basic_latin.asp