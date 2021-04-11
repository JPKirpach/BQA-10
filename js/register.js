function formValidation(){
  var registerForm = document.querySelector('form');
  return registerForm !== undefined;
}

function inputValidation(inputType){
  var inputField = document.querySelector("input[type="+inputType+"]");
  return inputField !== null;
}

function confirmPass(){
  var confPass = document.querySelectorAll("input[type='password']");
  return confPass.length === 2;
}

function buttonValidation(numberOfButtons){
  var documentButtons = document.querySelectorAll('button');
  return documentButtons.length === numberOfButtons;
}

function labelValidation(numberOfLabels){
  var documentLabels = document.querySelectorAll('label');
  return documentLabels.length === numberOfLabels;
}

function changePageValidation(){
  var documentLinks = document.querySelectorAll('a');
  return documentLinks.length;
}

function requiredFields(){
  var inputsForm = document.querySelectorAll('input');
  for(var i = 0; i < inputsForm.length; i++){
    if(!inputsForm[i].required){
      return false;
    }
  }
  return true;
}

var errors = [];

var requiredInputs = ['email', 'password', 'text'];

var numberOfLabels = 4;

var numberOfButtons = 2;

if(!formValidation()){
  errors.unshift('Form is not found.');
}

if(!confirmPass()){
  errors.unshift('Password confirmation is missing.');
}

for(var i = 0; i < requiredInputs.length; i++){
  if(!inputValidation(requiredInputs[i])){
    errors.unshift('Input ' + requiredInputs[i] + ' is missing.');
  }
}

if(!buttonValidation(numberOfButtons)){
  errors.unshift('At least one button is missing.');
}

if(!labelValidation(numberOfLabels)){
  errors.unshift('At least one label is missing.');
}

if(changePageValidation() !== 1){
  errors.unshift('The link to the other page is missing.');
}

if(!requiredFields()){
  errors.unshift('At least one field is optional.');
}

var divResult = document.querySelector('#results');

divResult.style.display = 'block';

var listResults = document.getElementById('error-list');

if(errors.length === 0){
  var displayedText = document.createTextNode('Every validation has been passed.')
  listResults.appendChild(displayedText);
}else{
  for(var i = 0; i < errors.length; i++){
    var displayedText = document.createTextNode(errors[i] + '\r');
    listResults.appendChild(displayedText);
  }
}
