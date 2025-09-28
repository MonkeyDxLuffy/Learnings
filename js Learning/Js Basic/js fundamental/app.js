let a = 10 ;
var b = 10 ; 
const c = 10 ;

console.log(a+b+c);

a=100;
var b = 200; 
// const cannot be chnaged througnout the code 
// let cannot be reinetilize thorog the code but can be updated  blosck scope 
// var can be changed and re inetilize anyewhere in the code 
console.log(a+b);

// loops practce 
let n = 10 ; 
for(  let i = 0 ; i< 10 ; i++){
        console.log(n*i);
        
}

// even number 0-100
let arr=[];
for ( let i =1 ; i< 100 ; i++){
    if( i%2==0 )
        {
        arr.push(i);
    }
}

console.log(arr);


// scope

let s=100 ; 
const ss = 100 ; 
var sss=100 ; 


{
    let s = 1000 ; 
    console.log(s);
    // block scope so output is 100 
}

// output would be s = 10 
console.log(s);


{
    console.log(ss);
    // const is always same throgh the code
}

{
    // var would change above value too not like let 
    var sss=1; 
    console.log(sss);
}
// var value has been changed to 1
console.log(sss);


// function 

// function to check if a person can drive ot not 


// normal function 

function verification( x){
        if( x>=18){
            console.log("yes you are above 18 you can drive")
        }
        else{
            console.log("you cannot drive you are less than 18")
        }
}
// you can pass any valu to the function calling
verification(56);

// arrow function 

let verify = (e)=>{
     if( e>=18){
            console.log("yes you are above 18 you can drive")
        }
        else{
            console.log("you cannot drive you are less than 18")
        }
}

verify(20);
// we can assign value yo variabel also and then print it in console 
// const result = verify(20);
// console.log(result);


// exploring more concept in js 

// loop using ternery operator 

console.log("ternary operator ");

let aa=100; 
let bb = 200 ; 

let compare = (aa>bb) ? "aa is greater" : "bb is greater"
console.log(compare)


// srrings practice

// backtickas

let string1=`hlo i am ${100} for sale`;
console.log(string1)

let main_string="abcdefghijklmnopqrstuvwxyz"

console.log(`length of main_string is ${main_string.length}`);
console.log(`Char at 23 position ${main_string.charAt(23)}`)
let slicee=main_string.slice(1, 5);  // 1st position pe ah kle 4 char extract kr lea last wala exclude hota hai
console.log(slicee) // ye new array deta hai purane array ko change nhi krta 


// Hoisting
//  we have let var and const 
// hoisting is something that help to declare any variable beforte the declearation 

// only var can be hoisted let and const will give us an error 


// using var it will give me undefined 
console.log(anish)
var anish=100;


// using let it will give me refrence error 
// uncomment
// console.log(dada);
// let dada = 100 ; 


// using const it will give me undefined 

// uncomment
// console.log(abc);
// let abc = 100 ; 


// clousers with examples
// it measn the inder function rembers the value of the outer function even after the execxution of the outer function 


 function outerfunction (){
    let outervalue="hello i am an outer function"

    function innerfunction(){
        console.log(outervalue)
    }

    return innerfunction
}

const answeris = outerfunction();
answeris();

// answer is returns inner function thats why we call it again for the result console.log