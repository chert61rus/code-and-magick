'use strict';
(function(){
   var avatar = document.querySelector('[name = avatar]');
   var overlay = document.querySelector('.overlay');
   var shiftX;
   var shiftY;
   var setOverlayPos = function(event){
   	   overlay.style.left = event.pageX - shiftX + 'px';
       overlay.style.top = event.pageY - shiftY +'px';
   }
   avatar.addEventListener('mousedown', function(event){
   	   var coords = overlay.getBoundingClientRect();
   	   shiftX = event.pageX - coords.left - pageXOffset;
   	   shiftY = event.pageY - coords.top - pageYOffset;
       document.addEventListener('mousemove', onmousemove)
       overlay.style.transform = 'translateX(0%)';
       setOverlayPos(event);
   }) 
   document.addEventListener('mouseup', function(){
       document.removeEventListener('mousemove', onmousemove)
   })
   function onmousemove(event){
     setOverlayPos(event);
   }

   var resetPosition = function() {
   	 overlay.style.left = '';
     overlay.style.top = '';
     overlay.style.transform = '';
   }

   document.querySelector('.setup-open').addEventListener('click', function(){
     resetPosition();
    });

   document.querySelector('.setup-open-icon').addEventListener('keydown', function(event){
        if (event.keyCode == 13){
          resetPosition();
        }
    });
      
}())
