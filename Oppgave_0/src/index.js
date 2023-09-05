
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
  // Get input-value from input-field
    const txt = document.getElementById("input").value;
    // Update p-tag with input-value
    document.getElementById("input-text").textContent = txt;
};
const addInputListener = () => {
  // Add eventlistener to input-field
  document.getElementById("input").addEventListener("input", inputTxt);
  //let text = document.getElementById("input-text");
  //text.addEventListener("click", inputTxt);
  //console.log(text);
};

// Oppgave 4
const changeTxtBtn = () => {
  const myList = ["item one", "item two", "item three"];
  myList.forEach((element) => {
  const para = document.createElement("p");
  para.innerHTML = element;
  document.getElementById("ul").appendChild(para);
  console.log(element)
});
};

const addChangeTxTBtnListener = () => {
  let btn = document.getElementById("write-list");
  btn.addEventListener("click", changeTxtBtn)
};
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8


const init = () => {
  addRemoveBtnListener();
  addChangeBtnListener();
  addInputListener();
  addChangeTxTBtnListener();
};

document.addEventListener("DOMContentLoaded", init);