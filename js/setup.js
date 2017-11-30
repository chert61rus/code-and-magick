'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomNames() {
  return firstNames[Math.round(Math.random() * (firstNames.length - 1))];
}
function getRandomLastNames() {
  return firstNames[Math.round(Math.random() * (lastNames.length - 1))];
}
function getRandomCoatColor() {
  return coatColor[Math.round(Math.random() * (coatColor.length - 1))];
}
function getRandomEyesColor() {
  return eyesColor[Math.round(Math.random() * (eyesColor.length - 1))];
}

var createWizards = function() {
  return {
    name: getRandomNames() + ' ' + getRandomLastNames(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  };
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();


var wizards = [];

for (var i = 0; i < 4; i++) {
  var newWizard = createWizards();
    
  wizards.push(newWizard);

  var cloneWizard = similarWizardTemplate.cloneNode(true);

  cloneWizard.querySelector('.setup-similar-label').innerHTML = newWizard.name;

  cloneWizard.querySelector('.wizard-coat').style.fill = newWizard.coatColor;

  cloneWizard.querySelector('.wizard-eyes').style.fill = newWizard.eyesColor;

  fragment.appendChild(cloneWizard);
}

document.querySelector('.setup-similar-list').appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
