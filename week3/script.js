// Declare a variable to keep track of the current slide position.
let slideIndex = 1;

// Main function to control the display of slides.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("numbertext");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide.
  slides[slideIndex - 1].setAttribute("style", "display: block;");
  dots[slideIndex - 1].className += " active";
}

// Call the showSlides function to display the initial slide.
showSlides(slideIndex);

// Function to move to the previous or next slide.
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to jump to a specific slide.
function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Function to move to the previous or next slide.
function plusSlides(n) {
    showSlides((slideIndex += n));
}


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

