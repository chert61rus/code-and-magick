'use strict';
(function(){
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
}())