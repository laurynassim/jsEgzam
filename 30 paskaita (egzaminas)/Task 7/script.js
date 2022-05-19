/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

showObjectKeys(audi)

function showObjectKeys(object){
  let audiArray = []
  for (let key in object){
    audiArray.push(object[key])
  }
  console.log(audiArray)
}