'use strict';
(function(){
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var addWizard = function(wizardData){
      var cloneWizard = similarWizardTemplate.cloneNode(true);

      cloneWizard.querySelector('.setup-similar-label').innerHTML = wizardData.name;

      cloneWizard.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;

      cloneWizard.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;

      fragment.appendChild(cloneWizard);
    };
    
    var addWizards = function(wizardsData){
     for (var i=0;i<4;i++){
       var ranNumber = Math.round(Math.random() * (wizardsData.length - 1));
       addWizard(wizardsData[ranNumber]);
     }
     document.querySelector('.setup-similar-list').appendChild(fragment);
    }

    var fragment = document.createDocumentFragment();
    var onLoad = function(wizardsData){
      addWizards(wizardsData);
    };
    var onError = function(errorMessage){
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = errorMessage; 
      document.body.insertAdjacentElement('afterbegin', node);
    };





    backend.load(onLoad, onError);
  
}())


