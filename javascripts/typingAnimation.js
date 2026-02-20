// Typing Animation

// Defining the roles to be displayed
const roles = [
  "Full Stack Web Developer",
  "MERN Stack Developer",
  "Tech Mentor & Instructor",
  "AI Enthusiast",
  "React Developer",
  "Mongodb DBA",
  "Node.js Developer",
  "UI/UX-Focused Dev",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
// Speeds (ms)
const TYPING_SPEED = 280; // slower typing (ms per char)
const DELETING_SPEED = 220; // slower deleting (ms per char)
const PAUSE_AFTER_FULL = 1500; // pause after full word typed (ms)
const PAUSE_AFTER_EMPTY = 900; // pause after fully deleted (ms)

// Function to handle the typing effect
function typeEffect() {
  const currentRole = roles[roleIndex];
  const typingText = document.getElementById("typing-text");
  if (!typingText) return;

  if (isDeleting) {
    charIndex = Math.max(0, charIndex - 1);
    typingText.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex = Math.min(currentRole.length, charIndex + 1);
    typingText.textContent = currentRole.substring(0, charIndex);
  }

  let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    delay = PAUSE_AFTER_FULL;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = PAUSE_AFTER_EMPTY;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
