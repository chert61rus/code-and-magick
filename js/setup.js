'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var elemSetup = document.querySelector('.setup');

document.querySelector('.setup-open').addEventListener('click', function(){
 elemSetup.classList.remove('hidden');
});

document.querySelector('.setup-close').addEventListener('click', function(){
 elemSetup.classList.add('hidden');
});

document.querySelector('.setup-open-icon').addEventListener('keydown', function(event){
    if (event.keyCode == 13){
      elemSetup.classList.remove('hidden');
    };
});

document.addEventListener('keydown', function(event){
    if (document.activeElement == document.querySelector('.setup-user-name')){
        return;
    }
    if (event.keyCode == 27){
      elemSetup.classList.add('hidden');
    };
});

document.querySelector('.setup-close').addEventListener('keydown', function(){
 if (event.keyCode == 13){
      elemSetup.classList.add('hidden');
    };
});

document.querySelector('.setup-submit').addEventListener('click', function(){
});

document.querySelector('.setup-submit').addEventListener('keydown', function(){
    if (event.keyCode == 13){
        document.querySelector('form').submit();
    };
});

document.querySelector('.setup-wizard .wizard-coat').addEventListener('click', function()
 {  
    var randomCoatColor = getRandomCoatColor();
    this.style.fill = randomCoatColor;
    document.getElementsByName('coat-color')[0].value = randomCoatColor;
})

document.querySelector('.setup-wizard .wizard-eyes').addEventListener('click', function()
 {  
    var randomEyesColor = getRandomEyesColor();
    this.style.fill = randomEyesColor;
    document.getElementsByName('eyes-color')[0].value = randomEyesColor;
})

document.querySelector('.setup-fireball-wrap').addEventListener('click', function()
 {
    var randomFireball = fireballColor[Math.round(Math.random() * (fireballColor.length - 1))];
    this.style.background = randomFireball;
    document.getElementsByName('fireball-color')[0].value = randomFireball;
})


