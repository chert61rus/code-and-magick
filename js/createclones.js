'use strict';
(function(){
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
}())