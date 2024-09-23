/* CONVERSION VALUES:
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// ---------- HTML ELEMENTS ----------
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthPar = document.getElementById("length-paragraph")
const volumePar = document.getElementById("volume-paragraph")
const massPar = document.getElementById("mass-paragraph")

convertBtn.addEventListener("click", function() {
    // ---------- USER'S INPUT OBTAINMENT & INPUT FIELD CLEARANCE ----------
    const inputValue = Number(inputEl.value)
    inputEl.value = ""
    
    // ---------- QUANTITY CHECK ----------
    const units = ["meter", "liter", "gallon", "kilo", "pound"]
    if(inputValue !== 1) {
        for(let i = 0; i < units.length; i++) {
            units[i] += "s"
        }
    }
    
    // ---------- LENGTH CONVERSION ----------
    lengthPar.textContent = `${inputValue} ${units[0]} = ${metersToFeet(inputValue).toFixed(3)} feet | ${inputValue} feet = ${feetToMeters(inputValue).toFixed(3)} ${units[0]}`
    
    // ---------- VOLUME CONVERSION ----------
    volumePar.textContent = `${inputValue} ${units[1]} = ${litersToGallons(inputValue).toFixed(3)} ${units[2]} | ${inputValue} ${units[2]} = ${gallonsToLiters(inputValue).toFixed(3)} ${units[1]}`
    
    // ---------- MASS CONVERSION ----------
    massPar.textContent = `${inputValue} ${units[3]} = ${kilosToPounds(inputValue).toFixed(3)} ${units[4]} | ${inputValue} ${units[4]} = ${poundsToKilos(inputValue).toFixed(3)} ${units[3]}`
})

// ---------- LENGTH CONVERSION ----------
function metersToFeet(meters) {
    return meters * 3.281
}

function feetToMeters(feet) {
    return feet / 3.281
}

// ---------- VOLUME CONVERSION ----------
function litersToGallons(liters) {
    return liters * 0.264
}

function gallonsToLiters(gallons) {
    return gallons / 0.264
}

// ---------- MASS CONVERSION ----------
function kilosToPounds(kilos) {
    return kilos * 2.204
}

function poundsToKilos(pounds) {
    return pounds / 2.204
}
