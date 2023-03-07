/////FIND THE SINGULAR OUTLIER IN A "NUMBER" OF ITEMS THAT ISN'T EQUAL TO THE REST///////
///// WHAT IS THE LEAST AMOUNT OF TIMES YOU CAN WEIGH TWO SIDES OF THE TOTAL  //////
///// ITEMS IN TWO GROUPS TO GUARANTEE FINDING THE OUTLIER  ANSWER: CUBE ROOT ///////
function compareWeights(number) {
  if(number === 0 || number === 1) {
    return 0;
  }
  let count = 0;
  do {
  number = Math.ceil((number / 3));
  count++; 
  }
  while (number > 1);
  return count;
}



console.log(compareWeights(50));
console.log(compareWeights(51));
console.log(compareWeights(100));
console.log(compareWeights(3));
console.log(compareWeights(15));
