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

