'use strict';
(function(){
var artifact;
var artifactSetup = document.querySelector('.setup-artifacts');

document.querySelector('.setup-artifacts-shop').addEventListener('dragstart', function(event)
{ 
  if (event.target.tagName == 'IMG'){
    artifact = event.target;
  }

  artifactSetup.style.outline = '2px dashed red';

})

artifactSetup.addEventListener('dragover', function(event)
{
  event.preventDefault();
  return false;
})

artifactSetup.addEventListener('drop', function(event)
{
  event.target.style.background = '';
  event.preventDefault();
  if(!event.target.firstElementChild && event.target.classList.contains('setup-artifacts-cell')){
    var newArtifact = artifact.cloneNode();
    event.target.appendChild(newArtifact);
  }
})

document.querySelector('.setup-artifacts-shop').addEventListener('dragend', function()
{ 
  artifactSetup.style.outline = '';
})

artifactSetup.addEventListener('dragenter', function(event){
  if(!event.target.firstElementChild && event.target.classList.contains('setup-artifacts-cell')){
    event.target.style.background = 'yellow';
  }
})

artifactSetup.addEventListener('dragleave', function(event){
  event.target.style.background = '';
})

var fillElement = function(element, color) {
  element.style.fill = color;
};

var changeElementBackground = function(element, color) {
  element.style.backgroundColor = color;
};

colorizeElem.onCoatColorChange = function(){
  var randomColor = colorizeElement(wizardCoat, coatColor, fillElement);
  document.getElementsByName('coat-color')[0].value = randomColor;
};

colorizeElem.onEyesColorChange = function(){
  var randomColor = colorizeElement(wizardEyes, eyesColor, fillElement);
  document.getElementsByName('eyes-color')[0].value = randomColor;
};

colorizeElem.onFireballChange = function(){
  var randomColor = colorizeElement(wizardFireball, fireballColor, changeElementBackground);
  document.getElementsByName('fireball-color')[0].value = randomColor;
};

var colorizeElement = function(elem, colors, fill){
  var randomColor = colors[Math.round(Math.random() * (colors.length - 1))];
  fill(elem, randomColor);
  return randomColor;
}

}())