function translateRomanNumeral (romanNumeral) {
  var totalValue = 0; 
  var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
if(romanNumeral.length === 0)
  return 0;

for(var i = 0; i<romanNumeral.length-1;i++){
  if(!DIGIT_VALUES[romanNumeral[i]]){
    return 'null'
  }
  if(DIGIT_VALUES[romanNumeral[i]] >= DIGIT_VALUES[romanNumeral[i+1]]){
    totalValue = totalValue + DIGIT_VALUES[romanNumeral[i]]
  }else{
    totalValue = totalValue - DIGIT_VALUES[romanNumeral[i]]
  }
}
totalValue = totalValue + DIGIT_VALUES[romanNumeral[i]]
return totalValue;
}

module.exports = {translateRomanNumeral}