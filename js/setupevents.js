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

    document.querySelector('.setup-close').addEventListener('keydown', function(event){
     if (event.keyCode == 13){
          elemSetup.classList.add('hidden');
        };
    });

    var form = document.querySelector('form');
    var backSave = function(){
        if(document.querySelector('[name = username]').value.length > 1){
            var formData = new FormData(form);
            backend.save(formData, function(){
              elemSetup.classList.add('hidden');
            }, function(){
            });
        }
    };

    document.querySelector('.setup-submit').addEventListener('click', function(event){
        backSave();
        event.preventDefault();
    });

    document.querySelector('.setup-submit').addEventListener('keydown', function(event){
        if (event.keyCode == 13){
          backSave();
        };
        event.preventDefault();
    });
}())