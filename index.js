const input = document.querySelector("input");
const img = document.querySelector("img");
const container = document.getElementById("container");
const before = document.getElementById("before");

// copy @input
input.addEventListener("copy", (el) => {
  if (input.value.length === 0) {
    input.className = "inputErrorMsg";
  } else {
    input.className = "toasty";
  }
});

// cut @input
input.addEventListener("cut", (el) => {
  if (input.value.length === 0) {
    input.className = "inputErrorMsg";
  } else {
    input.className = "toasty";
  }
});

input.addEventListener("input", (el) => {
  if (input.value.length > 0) {
    input.className = "inputNotErrorMsg";
  }
});

// button click
img.addEventListener("click", (el) => {
  if (input.value.length === 0) {
    input.className = "inputErrorMsg";
  } else {
    input.className = "toasty";
  }
});
