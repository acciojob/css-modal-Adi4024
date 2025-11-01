//your JS code here. If required.
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.onclick = function() {
  modal.style.display = "block";
};

// Close modal when clicking X
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close when clicking outside modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
