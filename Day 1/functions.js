
//const giftIds = [1, 2, 3, 4]
//const giftIds = [5, 3, 5, 3]
//const giftIds = [4, 1, 3, 5, 3, 4]
const giftIds = [4, 1, 6, 6, 3, 1, 3, 4]


var mapPositionNumber = new Map();

window.addEventListener("load", function () {
    console.log("giftIds: ", giftIds);
    console.log("mapPositionNumber: ", mapPositionNumber);
    findFirstRepeated()
});


function existsNumberRepeatedInArray(number, position){
  let repeat = 0;
  for(let i=position; i<giftIds.length; i++){
    if(giftIds[i] == number && i != position){
      repeat = repeat + 1;
    }
  }
  return repeat;
}

function checkIfNumberExistsInMap(number){
    console.log("checkIfNumberExistsInMap: ", number)
  return (mapPositionNumber.length > 0) && mapPositionNumber.has(number);
}

function getNumberFromMap(){
    console.log("getNumberFromMap")
  let numbers = []
  mapPositionNumber.forEach( (key,value) =>{
    numbers.push(value)
  })
  console.log("number: ", numbers[1])
  return numbers[1];
}

function findFirstRepeated() {
console.log("findFirstRepeated")
  for(let i=0; i<giftIds.length; i++){
    let number = giftIds[i];
    if(checkIfNumberExistsInMap(number)){
      continue;
    }
    let timesRepeated = existsNumberRepeatedInArray(number,i);
    console.log("timesRepeated: ", timesRepeated)
    if(timesRepeated > 0){
        console.log("timesRepeated: ", timesRepeated)
      mapPositionNumber.set(number,i); //key: number, value: firstPosition
    }
  }

  if(mapPositionNumber.size == 0){
    document.getElementById("results").innerHTML = -1;
  }else{
    document.getElementById("results").innerHTML = getNumberFromMap();
  }


}




