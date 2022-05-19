/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
let showButton = document.getElementById('btn')
let displayDiv = document.getElementById('output')


showButton.addEventListener('click', getDataFromApi)

async function getDataFromApi() {
    
    document.getElementById('message').innerText = ''
    let response = await fetch (ENDPOINT)
    let data = await response.json()
    showDataInDom(data)
}

function showDataInDom(data){
    let displayDivWrapper = document.createElement('div')
    displayDivWrapper.setAttribute('class', 'displayDivWrapper')
    const removeDivWrapper = document.getElementsByClassName("displayDivWrapper");
    while (removeDivWrapper.length > 0) removeDivWrapper[0].remove();
    displayDiv.append(displayDivWrapper)
    for (let i = 0; i < data.length; i++){
        createTabs(data, displayDivWrapper, i)
    }
}

function createTabs(array, parentDiv, index){
    
    let tabsContainer =  document.createElement('div')
    tabsContainer.setAttribute('class', 'tabsContainer')
    parentDiv.append(tabsContainer)

    let displayLogin = document.createElement('div')
    displayLogin.setAttribute('clas', 'displayLogin')
    tabsContainer.append(displayLogin)

    let displayAvatarImg = document.createElement('img')
    displayAvatarImg.setAttribute('class', 'displayAvatarImg')
    tabsContainer.append(displayAvatarImg)

    displayLogin.innerText = array[index].login
    displayAvatarImg.src = String(array[index].avatar_url)

}

