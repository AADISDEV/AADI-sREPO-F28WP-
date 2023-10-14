// Declare a variable to keep track of the current slide position.
let slideIndex = 1;

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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}