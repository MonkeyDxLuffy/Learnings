console.log("helloe")
document.querySelector


// body {
//   background-color: white;
//   color: black;
// }

// /* Styles for dark theme */
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: #121212; /* Dark grey background */
//     color: white; /* White text */
//     a{
//       color: white;

//     }
//     .body{
//         background-color: #121212;
//     }

//     .field{
//         color: white;
//         background-color: black;
//     }
//     .toggle_theme{
//         background-color: #172843;
    
//     }
//   }
// }

const navbar = document.getElementsByClassName("navbar");
console.log(navbar)[0];
const body = document.getElementsByClassName("body");
const field = document.getElementsByClassName("field");
const toggle_button = document.getElementById("toggle_button");
// class le 
console.log(toggle_button);

toggle_button.addEventListener('click', function() {
    navbar.style.backgroundColor = "black";
});


// function 
// .classlist css file button toggle 