/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts 
and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []

*/
const gifts = ['libro', 'ps5']
const materials = 'psli'

function manufacture(gifts, materials) {
  let results = [];
  for(let i=0; i<gifts.length; i++){
    let word = gifts[i];
    if(findMaterials(word,materials)){
      results.push(word)
    }
  }
  return results;
}

function findMaterials(word,materials){
  let matches = 0;
  console.log("word: ", word)
  for(i=0; i<materials.length; i++){
    matches += getMatchesInWord(word,materials[i])
  }
  console.log("matches: ", matches)
  return matches == word.length;
}

function getMatchesInWord(word, letter){
  let count = 0;
  for(let pos = 0; pos < word.length; pos++){
    count += word[pos] == letter ? 1 : 0;
  }
  return count;
}

window.addEventListener("load", function() {
  console.log("Page fully loaded!");
  document.getElementById("results").innerHTML =  manufacture(gifts, materials);
});






