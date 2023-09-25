/*----------------- if condition -----------*
var age = 18
if( age>18 ){
    console.log("is young");
    }
    else{
    console.log('is old')
    }
/*-------------assgniment2----------------
let surName = "a";
let age = 0;
let sex ;
if (sex) {
    console.log("are you sure");
} else {
    console.log("false");
}
/*---------------assgniment for ternary operator-----------
var age = 18;
( age>18 )?console.log("is young"):console.log('is old');
/*------------------assignment for while loop---------------------*/
/*let x = 0;
let counter = 0;
while ( counter < 20 ){

    x=counter+1
    console.log(x)
    counter++;
}*/
/*----------- excises-----------------
let a=2, b=3;
console.log(a++);
console.log(++b)*/
/*-------------- assignment-----
let x = 0;
counter = 0;
for(let counter = 0; counter<20; counter++){
    x=counter+1
    counter++;
}
console.log(x)
/*-----------exrcises-----------
let x;
for(let counter=0; counter<40; counter++){
x= counter + 1
console.log(x ,"awesome")
}
/*------------exrcises-----------
let x;
if( x % 2 == 0 );
{
    console.log(x ,"awesome")
}
/*--------------assignment4-----------
let num = prompt("please enter a number",);
counter = 0;

if(counter < 40){
 x = counter + 1
}
console.log(x);
/*---------------function--------------*/
/*-------------------notaion----------
function izinafx (){
    //code
}
izinafx()
let izinafx= function(){
    //code
}
/*-------------- this notation---------------------*/
/*const person = {
    name: "ram",
    age: 22,
    greet: function(){
    return `Hello ${this.name}, you are ${this.age} years old`  
    }
}
console.log(person.greet());
/*-------------- other example-----------

function ageVerify(){
    if(this.age> 18){
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}
  
const per1 = {age: 21};
const per2 = {age: 16};
ageVerify.call(per1);
ageVerify.call(per2);
/*-------------- explicity bind ------

function ageVerify(){
    if(this.age> 18){
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}
  
const per1 = {age: 21};
const per2 = {age: 16};
ageVerify.call(per1);
ageVerify.call(per2);
/*---- constractor example------
 function createperson(){
    return{
        firstName : 'john',
        lastName :'sander',
        fullName : function(){
        console.log(`my fullname is ${this.firstName} ${this.lastName}`) 
       
        } 
    }

}
const john = createperson()
john.fullName()*/
/*--------------- Arrow function -------------
const square = number=> number*number;
console.log(square(5));*/
/*-----------------
function doYouLikeApples(bool) {
    if (bool) {
      let str = "Apples are delicious!";
    } else {
      str = "Maybe oranges would be better.";
    }
    return str;
  }
  function doYouLikeApples(bool) {
    if (bool) {
      var str = "Apples are delicious!";
    } else {
      str = "Maybe oranges would be better.";
    }
    return str;
  }
   doYouLikeApples(); */
   /*---------------------------
   function fun()
{
	var temp ="temp is defined in function scope";
	//console.log(temp); 
}

fun();
console.log(temp);*/
/*------------------------------------
if(true)
{
  var v1 =10;
  let v2=20;
  console.log(v1);
  //console.log(v2); 
}

console.log(v1);
console.log(v2);*/
/*-------------------
let str = `Template literal in ES6`;

console.log(str);// Template literal in ES6
console.log(str.length); // 23
console.log(typeof str);// string*/
/*------------------------------------
let strWithBacktick = `Template literals use backticks  insead of quotes`;
console.log(strWithBacktick);*/
/*-------------- arrow function-----------
let add = function(a,b){
    return a + b;
}
console.log(add(10, 20));*/
/*------------- arrow function-----------
let add = (a,b) =>a+b;
console.log(add(20,40));*/
/*-------------------------------------------
function Employee(firstName, department, salary) { 
    this.firstName = firstName; 
    this.department = department; 
    this.salary = salary; 

    this.getInfo = function() { 
        // outer function context = Employee object 
        return function () { 
            // inner function context = Global object 
            console.log(this.firstName + " from " + this.department + " earns " + this.salary); 
        }; 
    } 
} 
let anEmp = new Employee('Jim', 'Finance', 5200); 
anEmp.getInfo(); 
const num1 = 30;
const num2 = 50;
// const num1 = 70;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}
add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

console.log(num1);

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();
// pass arguments
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(500, 900);

// return/assing to variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 900);

console.log(result);
function filter(numbers) {
  let results = [];
  for (const number of numbers) {
    if (number % 2 != 0) {
      results.push(number);
    }
  }
  return results;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers));*/
// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// async function someFunction (){
//   await
// }
// const otherFunction = async() =>{
//   await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    const first = await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return 'hello';
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}





