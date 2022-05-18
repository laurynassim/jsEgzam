/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clicker = document.getElementById('btn__element')
const clickerDisplay = document.getElementById('btn__state')
let clickCount = 0

clicker.addEventListener('click', function(){
    clickCount += 1
    clickerDisplay.innerHTML = clickCount
});