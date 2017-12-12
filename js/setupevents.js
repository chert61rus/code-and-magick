'use strict';
(function(){
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
}())