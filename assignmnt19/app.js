// chapter 15 {ARRAY 1}
// Q1
// var emptyarray = [];
// console.log(emptyarray)
// Q2
// var num = [64];
// var a = num.toString()
// console.log(a);
// Q3
// var alphabet = ["h", "i", "j", "k"];
// var letterJ = alphabet[2]; // "j" is at index 2
// alert(letterJ);
// Q4
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var totalLength = alphabet.length;
// console.log(totalLength); 
// Q5
// var mariaArray = ["chemicalElement"];
// mariaArray[1] = "second chem.Element";
// alert(mariaArray[1]);

// CHAPTER 16 {ARRAY 2}

// Q1
// var myArray = ['maria'];
// myArray.push('khan');
// // alert(myArray[myArray.length - 1]);
// Q2
// var number = ["one","two","three","four","five"];
// number.pop();
// console.log(number);
// Q3
// var number = ["1", "2", "3", "4", "5"];
// number.push(6);
// console.log(number);

// CHAPTER 16 (ARRAY 3)
// Q1
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.shift();
// console.log(sizes); 
// Q2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes); 
// Q3
// var Array = ["Maria"];
// Array.unshift("Khan");
// alert(Array[0]);
// Q4
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L"); 
// console.log(sizes); 

// Q5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes); 

// Q6
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var dogIndex = pets.indexOf("dog");
// pets.splice(dogIndex + 1, 0, "birds");
// pets.splice(dogIndex + 1, 3 );
// pets.splice(dogIndex + 1, 0, "birds","parrot");
// console.log(pets);

// Q7
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2); 
// console.log(pets);

// Q8
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets = pets.slice(3); 
console.log(pets); 