// Import stylesheets
import './style.css';

// Deep VS Shallow Copying
let person = {
  firstName: 'James',
  lastName: 'Bond',
};

// Shallow Copying
let copyPerson = { ...person };

copyPerson.firstName = 'Jimmy';

//Shallow Copying

let secondCopyPerson = Object.assign({}, person);

secondCopyPerson.firstName = 'Jim';

// Deep Copying

let animal = {
  firstName: 'Tom',
  lastName: 'Cat',
};

let animalCopy = animal;

animalCopy.firstName = 'Tommy';

// Shallow Copying
let animalSecondCopy = JSON.parse(JSON.stringify(animal));

animalSecondCopy.lastName = 'Kitty';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${copyPerson.firstName} ${copyPerson.lastName}</h1>
<h1>${secondCopyPerson.firstName} ${secondCopyPerson.lastName}</h1>
<h1>${person.firstName} ${person.lastName}</h1>
<h1>${animalCopy.firstName} ${animalCopy.lastName}</h1>
<h1>${animalSecondCopy.firstName} ${animalSecondCopy.lastName}</h1>
<h1>${animal.firstName} ${animal.lastName}</h1>`;
