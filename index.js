const text = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = text.dataset.words;

const wordArray = words.split(",");


let charIndex = 0;
let wordIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    if (cursor.classList.contains("blink")) {
      cursor.classList.remove("blink");
    }
    text.textContent = wordArray[wordIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    if(!cursor.classList.contains("blink")) {
      cursor.classList.add("blink");
    }
    wordIndex++;
    if (wordIndex > wordArray.length - 1) {
      wordIndex = 0;
    }
    setTimeout(type, 800);
  }
}

const type = () => {
  if (charIndex <= wordArray[wordIndex].length - 1) {
    if(cursor.classList.contains("blink")) {
      cursor.classList.remove("blink");
    }
    text.textContent += wordArray[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    if(!cursor.classList.contains("blink")) {
      cursor.classList.add("blink");
    }
    setTimeout(erase, 800);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
})