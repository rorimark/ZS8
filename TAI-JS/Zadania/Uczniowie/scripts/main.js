"use strict";

// --- DOM Elements ---
const checkboxesContainer = document.querySelector(".checkboxes");
const addStudentButton = document.getElementById("add-info");
const searchContainer = document.querySelector(".search");

const religiaSearchButton = document.getElementById("religia-search");
const healthEduSearchButton = document.getElementById(
  "edukacja-zdrowotna-search"
);
const imageConsentSearchButton = document.getElementById("wizerunek-search");

const religiaOutput = document.getElementById("religia");
const healthEduOutput = document.getElementById("edukacja-zdrowotna");
const imageConsentOutput = document.getElementById("wizerunek");

// --- Data ---
const checkboxLabels = [
  "Zgoda na udział w lekcjach religii",
  "Zgoda na udział w lekcjach edukacji zdrowotnej",
  "Zgoda na wizerunek",
];

const studentsList = [];

// --- UI setup ---
checkboxLabels.forEach((labelText, index) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  switch (index) {
    case 0:
      checkbox.id = "checkbox-religia";
      break;
    case 1:
      checkbox.id = "checkbox-edukacja-zdrowotna";
      break;
    case 2:
      checkbox.id = "checkbox-wizerunek";
      break;
  }

  const label = document.createElement("label");
  label.setAttribute("for", checkbox.id);
  label.innerHTML = `${labelText} <br/><br/>`;

  checkboxesContainer.appendChild(checkbox);
  checkboxesContainer.appendChild(label);
});

function filterStudentsByField(fieldName, outputElement) {
  const filtered = studentsList.filter((student) => student[fieldName]);
  outputElement.textContent =
    filtered.length > 0
      ? filtered.map((student) => student.nazwisko).join(", ")
      : "Brak uczniów w tej kategorii.";
}

// --- Event Handlers ---
addStudentButton.addEventListener("click", () => {
  const surnameInput = document.getElementById("surname");
  const religiaCheckbox = document.getElementById("checkbox-religia");
  const healthEduCheckbox = document.getElementById(
    "checkbox-edukacja-zdrowotna"
  );
  const imageConsentCheckbox = document.getElementById("checkbox-wizerunek");

  if (surnameInput.value.trim() === "") {
    alert("Proszę wpisać nazwisko ucznia!");
    surnameInput.value = "";
    surnameInput.focus();
    return;
  }

  const studentData = {
    nazwisko: surnameInput.value,
    religia: religiaCheckbox.checked,
    edukacjaZdrowotna: healthEduCheckbox.checked,
    wizerunek: imageConsentCheckbox.checked,
  };

  studentsList.push(studentData);
  console.log(studentsList);

  surnameInput.value = "";
  religiaCheckbox.checked = false;
  healthEduCheckbox.checked = false;
  imageConsentCheckbox.checked = false;
});

religiaSearchButton.addEventListener("click", () =>
  filterStudentsByField("religia", religiaOutput)
);
healthEduSearchButton.addEventListener("click", () =>
  filterStudentsByField("edukacjaZdrowotna", healthEduOutput)
);
imageConsentSearchButton.addEventListener("click", () =>
  filterStudentsByField("wizerunek", imageConsentOutput)
);
