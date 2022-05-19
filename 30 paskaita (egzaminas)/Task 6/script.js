/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

getUserAverageAge(users)
getUsersNames(users)

function getUserAverageAge (block){
  let totalArrayAge = 0
  for (let i = 0; i < block.length; i++){
    totalArrayAge += block[i].age
    averageAge =  totalArrayAge / block.length
  }
  let rounded = averageAge.toFixed(2);
  console.log(rounded)
}

function getUsersNames(block){
  let newArray  = []
  for (let i = 0; i < block.length; i++){
    newArray.push(block[i].name)
  }
  console.log(newArray)
}
