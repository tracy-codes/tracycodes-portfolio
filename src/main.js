// TypeWriter class
const TypeWriter = function(txtEl, words, wait = 3000) {
  this.txtEl = txtEl;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type function
TypeWriter.prototype.type = function() {
  // Current index of word
  const index = this.wordIndex % this.words.length;
  // Get text of current word
  const fullTxt = this.words[index];

  // Check if text is deleting
  if (this.isDeleting) {
    // Delete 1 character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add 1 characer
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    let typeSpeed = Math.floor(Math.random() * 100) + 35;
  }

  // Insert txt into el
  this.txtEl.innerHTML = this.txt;

  // Initial type speed
  let typeSpeed = Math.floor(Math.random() * 100) + 35;
  if (this.isDeleting) {
    typeSpeed = 50;
  }

  // Check if word is/isn't complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Wait at end of text
    typeSpeed = this.wait;
    // Set isDeleteing = true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    let typeSpeed = Math.floor(Math.random() * 100) + 35;
  }
  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init
function init() {
  const txtEl = document.querySelector(".type");
  // Init TypeWriter
  new TypeWriter(
    txtEl,
    ["Web Developer", "Ecommerce Fanatic", "Creator"],
    3000
  );
}
