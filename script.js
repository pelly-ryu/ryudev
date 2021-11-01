const name = document.querySelector("wired-input");
const button = document.querySelector("wired-button");
button.addEventListener("click", () => {
  window.alert(`Hello ${name.value.trim()}!`);
});
