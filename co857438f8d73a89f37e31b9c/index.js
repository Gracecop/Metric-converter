/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meter = 3.2808
let feet = 0.3048
let liter = 0.2642
let gallon = 3.7854
let kilo = 2.2046
let pound = 0.4536

const inputEl = document.querySelector("#input-el")
const btnEl = document.querySelector("#btn-el")
const page = document.getElementById("page")
const pageEl = document.getElementById("page1")
const page1 = document.getElementById("page2")

btnEl.addEventListener("click", function(){
    let value = inputEl.value
    let metval = value * meter
    let fetval = feet * value
    let litgal = value * liter
    let gallit = value * gallon
    let kipound = value * kilo
    let poundki = value * pound
    page.innerHTML = `<p>
        ${value} meters = ${metval.toFixed(3)} feet 
        | ${value} feet = ${fetval.toFixed(3)} meters
        </p>`
    pageEl.innerHTML = `<p>
        ${value} liters = ${litgal.toFixed(3)} gallons 
        | ${value} gallons = ${gallit.toFixed(3)} liters
        </p>`
    page1.innerHTML = `<p>
        ${value} kilos = ${kipound.toFixed(3)} pounds 
        | ${value} pounds = ${poundki.toFixed(3)} kilos
        </p>`
    
    inputEl.value = ""
})