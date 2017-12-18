'use strict';
(function(){
	window.colorizeElem = {
    	onCoatColorChange: function(){},
    	onEyesColorChange: function(){},
    	onFireballChange: function(){}
    }

    window.wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
	wizardCoat.addEventListener('click', function()
     {
        colorizeElem.onCoatColorChange();
    })

    window.wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    wizardEyes.addEventListener('click', function()
     {
        colorizeElem.onEyesColorChange();
    })
    
    window.wizardFireball = document.querySelector('.setup-fireball-wrap');
    wizardFireball.addEventListener('click', function()
     {
        colorizeElem.onFireballChange();
    })
}())