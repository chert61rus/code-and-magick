'use strict';
(function(){
    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');

    var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

    var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

    var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

    var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

    window.fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    window.getRandomNames = function() {
      return firstNames[Math.round(Math.random() * (firstNames.length - 1))];
    }
    window.getRandomLastNames = function() {
      return firstNames[Math.round(Math.random() * (lastNames.length - 1))];
    }
    window.getRandomCoatColor = function() {
      return coatColor[Math.round(Math.random() * (coatColor.length - 1))];
    }
    window.getRandomEyesColor = function() {
      return eyesColor[Math.round(Math.random() * (eyesColor.length - 1))];
    }

    window.createWizards = function() {
      return {
        name: getRandomNames() + ' ' + getRandomLastNames(),
        coatColor: getRandomCoatColor(),
        eyesColor: getRandomEyesColor()
      };
    }
}())