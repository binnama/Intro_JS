
const app = document.getElementById("app");

// Oppgave 1
const removeTxt = () => {
    const txt = document.getElementById("remove");
    txt.remove();
};
const addRemoveBtnListener = () => {
  let btn = document.getElementById("remove-btn");
  btn.addEventListener("click", removeTxt)
};

// Oppgave 2
const changeTxt = () => {
    const txt = document.getElementById("change");
    txt.innerHTML = "Dvorak er bedre enn QWERTY!";
};
const addChangeBtnListener = () => {
  let btn = document.getElementById("change-btn");
  btn.addEventListener("click", changeTxt)
};

// Oppgave 3
const inputTxt = () => {
    const txt = document.getElementById("input").value;
    txt.innerHTML = txt;
};
const addInputListener = () => {
  let text = document.getElementById("input-text");
  text.addEventListener("input", inputTxt);
  console.log(text);
};

// Oppgave 4
const myList = ["item one", "item two", "item three"];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8


const init = () => {
  addRemoveBtnListener();
  addChangeBtnListener();
  addInputListener();
};

document.addEventListener("DOMContentLoaded", init);