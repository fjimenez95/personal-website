// IPO APPROACH (Input - Process - Output)

// Declare your constants and variables (State)
let year;

// Select and cache DOM element references
const yearEl = document.getElementById('year');

// Initialize your event listeners


// Define application functions


// Run the function as soon as the page loads
init();

function init() {
    year = new Date().getFullYear();
    yearEl.innerText = year;
}

