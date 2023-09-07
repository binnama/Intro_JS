
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
    //console.log(element)
  });
};

const addChangeTxTBtnListener = () => {
  let btn = document.getElementById("write-list");
  btn.addEventListener("click", changeTxtBtn);
};

// Oppgave 5
const addElementBtn = () => {
  const txt = document.getElementById("text").value;

  const para = document.getElementById("select");
  const value = para.value;
  if (value === "h2") {
    const valueElement = document.createElement("h2");
    valueElement.innerHTML = txt;
    document.getElementById("placeholder").appendChild(valueElement);
  }
  else if (value === "h3") {
    const valueElement = document.createElement("h3");
    valueElement.innerHTML = txt;
    document.getElementById("placeholder").appendChild(valueElement);
  }
  else if (value === "span") {
    const valueElement = document.createElement("span");
    valueElement.innerHTML = txt;
    document.getElementById("placeholder").appendChild(valueElement);
  }
  else {
    const valueElement = document.createElement("p");
    valueElement.innerHTML = txt;
    document.getElementById("placeholder").appendChild(valueElement);
  }
  //console.log(value, txt)
}

const addElementBtnListener = () => {
  let btn = document.getElementById("create");
  btn.addEventListener("click", addElementBtn);
};

// Oppgave 6
const listReducerBtn = () => {
  const reducedList = document.getElementById("list")
  if ( reducedList.length !== 0 ) {
    reducedList.removeChild(reducedList.firstElementChild);
  }
}

const addListReducerBtnListener = () => {
  let btn = document.getElementById("remove-li")
  btn.addEventListener("click", listReducerBtn)

}
// Oppgave 7
  const text = document.getElementById("name");
  let btn = document.getElementById("order")

  btn.disabled = true

  const stateHandler = () => {
    if (text.value.length > 4 ) {
      btn.disabled = true
    } else {
      btn.disabled = false
    }
  }

  text.addEventListener("input", stateHandler)

  // Oppgave 8
  const colorBtn = () => {
      count = 0;
    const luList = document.getElementsByClassName("children")
    const liList = luList[0].getElementsByTagName("li")
    for (i = 0; i < liList.length; i++) {
      count++
      if (count % 2 === 0) {
        liList[i].style.border = "thick solid #FFC0CB"
      }
      else {
        liList[i].style.border = "thick solid #00FF00"

      }
      console.log(liList[i])
    }
  }

  const addColorBtnListener = () => {
    const btn = document.getElementById("color")
    btn.addEventListener("click", colorBtn);
  }

  const init = () => {
    addRemoveBtnListener();
    addChangeBtnListener();
    addInputListener();
    addChangeTxTBtnListener();
    addElementBtnListener();
    addListReducerBtnListener();
    addColorBtnListener();

  };

document.addEventListener("DOMContentLoaded", init);