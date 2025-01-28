const texts = ["Born to Perform", "Conquer Your Limits"]; // Texts to cycle through
const typingSpeed = 100; // Typing speed in ms
const deletingSpeed = 50; // Deleting speed in ms
const delayBetweenTexts = 1000; // Pause between typing/deleting each text in ms
const cursorBlinkSpeed = 500; // Cursor blink speed in ms

const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");

let textIndex = 0; // Tracks which text is being typed
let charIndex = 0; // Tracks the current character
let isDeleting = false; // Whether the animation is currently deleting text

// Typing and deleting function
function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    // Remove characters
    textElement.textContent = currentText.substring(0, charIndex);
    charIndex--;

    // When finished deleting, switch to the next text
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Move to the next text in the array
      setTimeout(typeText, delayBetweenTexts);
      return;
    }
  } else {
    // Add characters
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    // When finished typing, pause before deleting
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, delayBetweenTexts);
      return;
    }
  }

  // Adjust speed for typing and deleting
  const delay = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeText, delay);
}

// Cursor blinking effect
function blinkCursor() {
  setInterval(() => {
    cursorElement.style.visibility =
      cursorElement.style.visibility === "hidden" ? "visible" : "hidden";
  }, cursorBlinkSpeed);
}

// Start the animation
typeText();
blinkCursor();


gsap.from(".text-center",{
  duration:2,
    opacity:0,
    scrollTrigger:{
      trigger:".text-center",
      scroller:"body",
      markers:true,
      start:"top 95%"  ,
      scrub: 2, // Smoothly scrub through the animation with the scroll

    }
});
gsap.from(".text h1",{
  duration:2,
  x:-600,
    scrollTrigger:{
      trigger:".text h1",
      scroller:"body",
      markers:true,
      start:"top 98%"  ,
      scrub:0.1, // Smoothly scrub through the animation with the scroll

    }
});


