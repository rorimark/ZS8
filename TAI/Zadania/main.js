const checkboxes = document.querySelector(".checkboxes");
const search = document.querySelector(".search");
const addInfo = document.getElementById("add-info");
const religiaSearch = document.getElementById("religia-search");
const edukacjaZdrowotnaSearch = document.getElementById(
  "edukacja-zdrowotna-search"
);
const wizerunekSearch = document.getElementById("wizerunek-search");

const info = [
  "Zgoda na udział w lekcjach religii",
  "Zgoda na udział w lekcjach edukacji zdrowotnej",
  "Zgoda na wizerunek",
];
const students = [];

info.forEach((value, index) => {
  const input = document.createElement("input");

  input.type = "checkbox";
  input.id = `checkbox-${index}`;

  const label = document.createElement("label");
  label.setAttribute("for", input.id);
  label.innerHTML = `${value} <br/><br/>`;

  checkboxes.appendChild(input);
  checkboxes.appendChild(label);
});

addInfo.addEventListener("click", (e) => {
  const surname = document.getElementById("surname");
  const religia = document.getElementById("checkbox-0");
  const edukacjaZdrowotna = document.getElementById("checkbox-1");
  const wizerunek = document.getElementById("checkbox-2");

  const student = {
    nazwisko: surname.value,
    religia: religia.checked,
    edukacjaZdrowotna: edukacjaZdrowotna.checked,
    wizerunek: wizerunek.checked,
  };

  students.push(student);

  console.log(students);
});

religiaSearch.addEventListener("click", (e) => {
  const p = document.createElement("p");
  let religiaStudents = "Uczniowie chodzący na religię: ";
  students.forEach((value, index) => {
    if (value.religia) {
      religiaStudents += value.nazwisko + ", ";
    }
  });

  p.innerHTML = religiaStudents;
  search.appendChild(p);
});

edukacjaZdrowotnaSearch.addEventListener("click", (e) => {
  const p = document.createElement("p");
  let edukacjaZdrowotnaStudents = "Uczniowie chodzący na edukację zdrowotną: ";
  students.forEach((value, index) => {
    if (value.edukacjaZdrowotna) {
      edukacjaZdrowotnaStudents += value.nazwisko + ", ";
    }
  });

  p.innerHTML = edukacjaZdrowotnaStudents;
  search.appendChild(p);
});

wizerunekSearch.addEventListener("click", (e) => {
  const p = document.createElement("p");
  let wizerunekStudents =
    "Uczniowie ktorzy zgodzili się na udostępnianie ich wizerunku: ";
  students.forEach((value, index) => {
    if (value.wizerunek) {
      wizerunekStudents += value.nazwisko + ", ";
    }
  });

  p.innerHTML = wizerunekStudents;
  search.appendChild(p);
});
