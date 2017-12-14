'use strict';

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