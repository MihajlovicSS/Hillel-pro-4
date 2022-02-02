'use strict';
function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      );
    }
    return result;
  }

  function generateObject(str){
    let result = {};
    for (let i = 0; i < str.length; i++){
        result[getRandomString(5)] = {
            value: str.slice(0, i+1),
        }
    }
    return result;
  }

function getStringFromObject(obj){
    let result = '';
    for(let key in obj){
        for(let innerKey in obj[key]){
            if(obj[key][innerKey].length > result.length) result = obj[key][innerKey];
        }
    }
    return result;
}
console.log('Результат функции generateObject("transformation"):');
console.log(generateObject('transformation'));
console.log('Результат функции getStringFromObject:');
console.log(getStringFromObject(generateObject('transformation')));