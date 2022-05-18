/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let input = document.getElementById('search')
const form  = document.getElementsByTagName('form')
const output = document.getElementById('output')

form[0].addEventListener('submit', (event) => {
    event.preventDefault();
    let number = input.value
    let convertToLb = number * 2.2046
    let convertToGrams = number / 0.0010000
    let convertToOz = number * 35.274

    let displayLb = document.createElement('div')
    displayLb.setAttribute('class', 'displayLb')
    const removeDisplayLb = document.getElementsByClassName("displayLb");
    while (removeDisplayLb.length > 0) removeDisplayLb[0].remove();
    output.append(displayLb)
    displayLb.innerHTML = convertToLb + ' ' + 'lb'

    let displayGrams = document.createElement('div')
    displayGrams.setAttribute('class', 'displayGrams')
    const removeDisplayGrams = document.getElementsByClassName("displayGrams");
    while (removeDisplayGrams.length > 0) removeDisplayGrams[0].remove();
    output.append(displayGrams)
    displayGrams.innerHTML = convertToGrams + ' ' + 'g'

    let displayOz = document.createElement('div')
    displayOz.setAttribute('class', 'displayOz')
    const removeDisplayOz = document.getElementsByClassName("displayOz");
    while (removeDisplayOz.length > 0) removeDisplayOz[0].remove();
    output.append(displayOz)
    displayOz.innerHTML = convertToOz + ' ' + 'oz'
});
