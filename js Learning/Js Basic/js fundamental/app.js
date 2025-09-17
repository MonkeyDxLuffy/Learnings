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