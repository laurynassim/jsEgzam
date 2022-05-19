/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let output = document.getElementById('output')

fetch(ENDPOINT)
    .then(response => { return response.json();})
    .then(manoFailas => {
        // Dirbam su gautais duomenimis
       createElements(manoFailas);
    })

    function createElements(data){
        console.log(data)
        let outputWrapper = document.createElement('div')
        outputWrapper.setAttribute('class', 'outputWrapper')
        output.append(outputWrapper)

        for (let i = 0; i < data.length; i++){

            let brandCard = document.createElement('div')
            brandCard.setAttribute('class', 'brandCard')
            outputWrapper.append(brandCard)
    
            let brandCardName = document.createElement('div')
            brandCardName.setAttribute('class', 'brandCardName')
            brandCard.append(brandCardName)
            brandCardName.innerHTML = data[i].brand

            let brandCardModels = document.createElement('div')
            brandCardModels.setAttribute('class', 'brandCardModels')
            brandCard.append(brandCardModels)
            brandCardModels.innerHTML = data[i].models
           
        }
    }


