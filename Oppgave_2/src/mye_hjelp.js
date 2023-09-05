const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// TODO: Hent HTML #id med getElementById
const searchInput = "";
const filterInput = "";
const filterButton = "";

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = "";
  if (searchName) {
    // Bruk someArray.find(user => user.name === searchName) eller liknende for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = "";
    if (searchResult) {
      // TODO: Oppdatere grensesnittet. Bruk createTableUI(resultatet av søket)
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML = en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen søkeord vis listen du startet med. Hint: createTableUI(users)
  }
};

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = "";
  if (filterValue && Number(filterValue)) {
    // TODO: Bruk someArray.filter(user => user.age > filterValue) eller liknende for å hente ut de brukeren som har en alder høyere en filterValue
    const filterResult = "";
    if (filterResult && filterResult.length > 0) {
      // TODO: Oppdatere grensesnittet. Bruk createTableUI(resultatet av søket)
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen filterValue eller filterValue ikke er et tall vis liste du startet med. Hint: createTableUI(users)
  }
};

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener("keyup", handleSearch);
filterButton.addEventListener("click", handleFilter);
