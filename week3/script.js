// Variable to track the current index
let currentIndex = 0;

// Array For images
const images = [
"images/1.jpeg",
"images/2.jpeg",
"images/3.jpeg",
"images/4.jpeg",
"images/5.jpeg",
"images/6.jpeg",
"images/7.jpeg",
"images/8.jpeg"
];

// Set the time interval (in milliseconds)
const intervalTime = 2000; // Change this to your desired time interval

// Create a function to change the image source and toggle display
function changeImage() {
  // Get the slide element 
  const slide = document.getElementsByName('slide')[0];
  
  // Toggle display to show/hide images
  slide.style.display = 'none'; // Hide the current image
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
  slide.style.display = 'block'; // Show the next image
}

// Create a function to start the image carousel
function startImageSlider() {
  changeImage(); // Display the first image
  setInterval(changeImage, intervalTime); // Change images at specified intervals
}

// Run the function 
window.addEventListener('load', startImageSlider);


// JS for lab3Form.html

// Select all the input elements and the form
const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Function to validate the email using a regular expression
function checkEmailValid(emailValue) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(emailValue);
}

// Function to validate the password
function checkPasswordValid(passwordValue) {
  return passwordValue.length >= 8;
}

// Function to update error messages and styles
function updateError(element, message, isValid) {
  const errorElement = element.nextElementSibling;
  if (!isValid) {
    errorElement.textContent = message;
    element.classList.add("error");
  } else {
    errorElement.textContent = "";
    element.classList.remove("error");
  }
}

// Event listeners for real-time validation
username.addEventListener("blur", () => {
  updateError(username, "Username is required", username.value.trim() !== "");
});

email.addEventListener("blur", () => {
  updateError(email, "Invalid email address", isEmailValid(email.value));
});

password.addEventListener("blur", () => {
  updateError(password, "Password must be at least 8 characters", isPasswordValid(password.value));
});

confirmPassword.addEventListener("blur", () => {
  updateError(confirmPassword, "Passwords do not match", confirmPassword.value === password.value);
});

// Event listener for form submission
form.addEventListener("submit", (event) => {
  if (
    username.value.trim() === "" ||
    !isEmailValid(email.value) ||
    !isPasswordValid(password.value) ||
    confirmPassword.value !== password.value
  ) {
    event.preventDefault(); // Prevent form submission if any validation fails
  }
});

