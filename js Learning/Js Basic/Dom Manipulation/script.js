const h1tag = document.getElementById('h1');
const button = document.getElementById('btn1');
const Paragraph = document.querySelector('p');
const allLinks = document.querySelectorAll('a');


// id will give proper id 
// class name will give object and then u can select form it  
// queryselector will 1st or perticular query 
// queryselector all will give nodelist like [0][1] and so one 

console.log(h1tag)
console.log(button)
console.log(Paragraph)
console.log(allLinks) 


console.log("changing elemet starts here ")
button.addEventListener('click' , ()=>{
    button.style.backgroundColor="pink"
    // ass soon as a button is clicked it shoes pink color 
    button.innerHTML="clicked ";
    Paragraph.style.color='orange'
})

// wwe also have dirffernt types of evemt listnerss ex  
// click 
// hower 
// doopdown etc etc 



// forms in js
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the page from reloading itself
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) {
    message.textContent = 'Please fill ';
  } else {
    message.textContent = `Welcome, ${username}!`;
  }
});



// event deligation


const parentdiv=document.getElementById('parent')
const p=document.getElementById('parent_text')
console.log(p);
parentdiv.addEventListener('click' , ()=>{
p.textContent="Parent div clicked   But when we click on  any of the button it also shows clicked beacuseit comes under event bubbling"
})

// destructing 
// it is used to extract array info array and object

const name = ["Sugam ", "anish" , "vinyak"]
const [first , second , third]=name;

console.log(first);


// we can also skip any variable using , ,

const number = [1,2,3,4]
const [a , , c]=number;
console.log(a,c);

// we can also take 1 number and keep rest in group
const numbers=[100,2,3,4,5,5,6,7,7,8,9,9,9,86,6,46,74,]
const [X ,...ret]=numbers;
console.log(X)
console.log(ret)


// we can aslo extract info from object as well

const person = {nameOfPerson:'Anish' , nameOfCompany:'H&P' , id:'Anishmehta@gmail.com'}
const {nameOfPerson, nameOfCompany}=person;

console.log(nameOfPerson);
console.log(nameOfCompany);

// In above case 1st i was using different name as of object and extracted variables like i eas using name:ansih in thr object and when i was giving value i was using nameOfPerson so it gived me unfined so use same name to use the value 
// ans if we have to assing values to different names we use this
// used person as a object and one at the end of name so they are not matched with other variables 
const data = {nameOfPersonone:'Sugam' , nameOfCompanyone:'H&P intern' , idone:'@gmail.com'}
const { nameOfPersonone: userName , nameOfCompanyone:companyName}=data

console.log(userName);
console.log(companyName);

// so if we need to change any of the variable we can do it using this by first writing the neme of the real object and then assingning the new variable with ==  to the object to coppy  value we can see in above exapmle const data 




// Spread operator 
// it is like a glass that is broken into small parts 
// it is used to coppy an array to another 
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy);

// merging  two array 
const array1 = [1, 2];
const array2 = [3, 4];
const merged = [...array1, ...array2];
console.log(merged);

// to find maximum of number present in an array girst it spread them into parts then compare them 
const nums = [5, 10, 15];
console.log(Math.max(...nums));

// Copy an object
const obj = { a: 1, b: 2 };
const obj2 = { ...obj };

console.log(obj2);

// Merge objects
const aa = { aaName: "Anish" };
const bb = { bbAge: 25 };
const combined = { ...aa, ...bb };
console.log(combined)





// IMP ( USE OF BOTH DESTRUCTER AND SPREAD OPERATOR )





// Destructuring
const fruits = ["apple", "banana", "mango"];
const [f1, f2] = fruits;
console.log(f1, f2); // 'apple' 'banana'

// Spread
const moreFruits = ["orange", ...fruits, "grape"];
console.log(moreFruits); // [ 'orange', 'apple', 'banana', 'mango', 'grape' ]


// rest operator is usedto get multible value as an input example 


const trry = { 2: "two", name2222 : "two"};
// console.log( trry );
console.log(Object.keys(trry)); // keys only reads as a string even if we pass it in a number like i have used 2 iso wehn i print key it shows me a string not a nulber 


// highr oder function and map reduce and filter 

// higher oder functions are those functions that takes an input or retuens a value 

