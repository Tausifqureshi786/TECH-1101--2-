console.log("hello and testing")

// this is used to call the id in the html
// const fname = document.querySelector("#firstName");
// const submit = document.querySelector("#submit");
// first call  the text field to javascript
const input2 = document.querySelector("#input2");
// now call the 2nd submit button
const submit2 = document.querySelector("#submit2"); 

const show = document.querySelector("#show");

const clear = document.querySelector("#Reset");

let input3 = document.querySelector("#input2").value;

input2.addEventListener("click", function(){
 console.log("This input is working");
});

submit2.addEventListener("click", function(){
//   // show.textContent = input2.value;
//  numero1 = rannum;
//   if ( numero1 ==0 ){
//     // show.textContent = "Enter the number in the field first";
//    console.log("Hello");
   
//  }
 
  // else {
  random();
// }
});

clear.addEventListener("click", function(){
  clear123();
});


/*
    This is a function that does 3 things.
    1. takes the value from the input field and stores it in a variable 
        called max.
    2. gives out the random rumber less than the given input number.
    3. shows the result on the display.     
*/ 
// max = input2.value;
  function random(max) {
     max = input2.value;

    rannum = Math.floor(Math.random() * Math.floor(max));
    show.textContent = rannum;
   
 }
function empty(){
  
 if ( input2.length= 0){
    show.textContent = "Enter the number in the field first";
   console.log("Hello");
 }
}

  function clear123(){
    show.textContent = "Result of input should go here";
    input2.textContent = "Enter your text here";
  }
  

  // function log (){
// console.log("This Button is working");
// }


// function variable(){

  // random(45);
//   }


// submit.addEventListener("click", log() );
// /*
// submit.addEventListener("click", function() {
//     console.log("This button is working");
// });
// */


// fname.addEventListener("click", function(){
//     console.log("This input is working");
// });



// this is the event listener for the second input field
// LName.addEventListener("click", function(){
//     console.log("This second text field is working");

// });





// This is the event listener for the second submit button



  
//   getRandomInt(3)
  // expected output: 0, 1 or 2


// u will need three functions in your assignment to 


// // Methods used in strings
// let fruit = "Apple-Banana-Mango";

// console.log(fruit.length);
// console.log(fruit.indexOf("pp"));
// console.log(fruit.slice(2,7));
// console.log(fruit.replace( "a", "12"));

// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(7));
// console.log(fruit[7]);
// console.log(fruit.split(""));  // split by characters
// console.log(fruit.split('-')); // split by hyphen

// // Arrays in Javascript

// let fruits = ["apple", "Mango", "peach", "guava"]
// fruits = new Array("apple", "Mango ","peach","guava");

// console.log(fruits);

// console.log(fruits[0]);   //acces the value at index 2

// fruits[1] = "pineapple";
// console.log(fruits);

// // a loop that shows the values of arrays one by one 

// for( let i=0 ; i<fruits.length ; i++ ) {

//   console.log(fruits[i]);

// }

// //common methods in arrays

// console.log('to string\n', fruits.toString());

// console.log('joining the array\n',fruits.join('-'));

// console.log( fruits.pop(), fruits ); // removes last item from an array

// console.log(fruits.push('blackberries'), fruits); // adds an item to the array


