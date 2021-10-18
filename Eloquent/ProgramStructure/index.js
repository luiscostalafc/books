// var result = 1;
// var counter = 0;

// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }

// console.log({result})

// for (var number = 0; number <= 12; number = number + 2)
// console.log({number})

// var result = 1;
// for (var counter = 0; counter < 10; counter = counter +1)
// result = result * 2;
// console.log({result})

// for (var current = 20; ; current++) {
//   if (current % 7 == 0)
//   break;
// }
// console.log({current})

// for (var number = 0; number <= 12; number += 2)
// console.log({number})

//Desafio 01
// for (var number = '#'; number.length <=7; number += '#') 
// console.log({number})

// for (var current = 20; ; current++) {
//   //   if (current % 7 == 0)
//   //   break;
//   // }


//Desafio 02
  // for (var current = 1; current <= 100; current++) {
  //   let currentFizz = current % 3 == 0
  //   let currentBuzz = current % 5 == 0
  //   if (currentFizz && currentBuzz) {
  //     console.log('FizzBuzz')
  //   }
  //   else if (currentFizz) {
  //      console.log('Fizz') 
  //     } else if (currentBuzz && !currentFizz) {
  //       console.log('Buzz')
  //     } else {
  //       console.log(current)
  //     }

  
//   var result = 1;
// for (var counter = 0; counter < 10; counter = counter + 1)
// result = result * 2;
// console.log(result);


//Tentativa (errado)
  // let number = ''
  // let secondNumber =''
  // let total = number + secondNumber;


  //     for (number; number.length <= 8; number += ' ####\n') {
  //       console.log(number)
    
  //       for (secondNumber; secondNumber.length <= 4; secondNumber += '####') {
  //         console.log(secondNumber)
  //       }  
  //    }

  // let size = 8;

  // let board = "";
  
  // for (let y = 0; y < size; y++) {
  //   for (let x = 0; x < size; x++) {
  //     if ((x + y) % 2 == 0) {
  //       board += " ";
  //     } else {
  //       board += "#";
  //     }
  //   }
  //   board += "\n";
  // }
  
  // console.log(board);


var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
    result += "_";
  };
var mountain = function(size) {
  result += "/";
  for (var count = 0; count < size; count++)
  result += "'";
  result += "\\";
};
flat(3);
mountain(4);
flat(6);
mountain(1);
flat(1);
return result;
}

console.log(landscape())
  
    
  

