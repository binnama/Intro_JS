const users = [
  { id: 0, name: "Henry Cavill", age: 77 },
  { id: 1, name: "Onkel Skrue", age: 85 },
  { id: 2, name: "Son Goku", age: 99 },
  { id: 3, name: "Captain Jack Sparrow", age: 34 },
  { id: 4, name: "Erez Zukerman", age: 60 },
  { id: 5, name: "Joel Miller", age: 70 },
  { id: 6, name: "Harry Potter", age: 20 },
  { id: 7, name: "Geralt of Rivia", age: 21 },
  { id: 8, name: "Frode Baggins", age: 6 },
  { id: 9, name: "Thomas Frank", age: 31 },
  { id: 10, name: "Sun Tzu", age: 87 },
];

// TODO: Hent HTML #id med getElementById
const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const userElement = document.getElementById("users");

const presentUsers = () => {
  for (const obj of users) {
    for (const key in obj) {
      userElement.innerHTML += `${key}: ${obj[key]}<br>`;
    }
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearch = () => {
  const searchName = inputName.value.toLowerCase();

  // Clear the userElement
  userElement.innerHTML = "";

  // Find all users with the same credentiales as the user-input
  const matchingUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchName)
  );

  // Display the matchind names
  matchingUsers.forEach((user) => {
    userElement.innerHTML += `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}<br>`;
  });
  if (matchingUsers.length === 0) {
    userElement.innerHTML = "No user found. Try another name";
  }
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const handleFilter = () => {
  const tempAge = inputAge.value;

  if (tempAge === null || tempAge === "") {
    return;
  }
  const minAge = parseInt(inputAge.value);

  userElement.innerHTML = "";

  const olderUsers = users.filter((user) => user.age > minAge);

  olderUsers.forEach((user) => {
    userElement.innerHTML += `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}<br>`;
  });
  if (olderUsers.length === 0) {
    userElement.innerHTML =
      "There is no users older than the given minimum age";
  }
};

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
inputName.addEventListener("input", handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
const addFilterBtnListener = () => {
  const btn = document.getElementById("filter");
  btn.addEventListener("click", handleFilter);
};

presentUsers();
addFilterBtnListener();
