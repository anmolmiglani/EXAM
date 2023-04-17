console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number


const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array

let peopleNames = [];

peopleNames.push("Jared");
peopleNames.push("Francis");
peopleNames.push("Sarah");

console.log(peopleNames);
// Step 4: Remove the first array item from the array
let myImmutableArray = [1, 2, 3, 4, 5];
let newImmutableArray = myImmutableArray.slice(); // make a copy of the original array
newImmutableArray.shift(); // removes the first element (1) from the copy
console.log(newImmutableArray); // outputs [2, 3, 4, 5]
console.log(myImmutableArray); // original array is still intact [1, 2, 3, 4, 5]

// Step 5 Remove the second array item from the array
let myImmutableArray = [1, 2, 3, 4, 5];
myImmutableArray.splice(1, 1); 
console.log(myImmutableArray); 

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const myImmutableArray = ['Jared', 'Francis', 'Jim', 'Amrit', 'Johanna','Ury'];
const newArray = myImmutableArray.filter(item => !item.startsWith('J'));
console.log(newArray); 

// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";

const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', function() {
  alert('Call me now at 555-555-5555');
});