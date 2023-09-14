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
/*---- constractor example------*/
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
john.fullName()



