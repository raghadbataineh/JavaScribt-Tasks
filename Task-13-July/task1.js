const text = document.getElementById("box");
let isTextChanged = false;

function changeText() {
  if (isTextChanged) {
    text.innerHTML = "Can I help you ?";
    isTextChanged = false;
  } else {
    text.innerHTML = "Hello World!";
    isTextChanged = true;
  }
}

text.addEventListener("mouseenter", changeText);
text.addEventListener("mouseleave", changeText);

