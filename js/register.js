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

function changePageValidation(usedLink){
  var documentLink = document.querySelector('a');
  return documentLink.href === usedLink;
}

function buttonContentValidation(buttonContent){
  var formButtons = document.querySelectorAll('button');
  if(formButtons.length === 1){
    return formButtons[0].textContent === buttonContent;
  }
  for(var i = 0; i < formButtons.length; i++){
    if(formButtons[i].textContent !== buttonContent[i]){
      return false;
    }
  }
  return true;
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

function inputLabelValidation(){
  var formItems = document.querySelectorAll('.label-type');
  for(var i=0; i < formItems.length; i++){
    if(formItems[i].querySelectorAll('label').length === 0){
      return false;
    }
  }
  return true;
}

var errors = [];

var requiredInputs = ['email', 'password', 'text'];

var numberOfLabels = 4;

var numberOfButtons = 2;

var buttonContent = ['Clear the form', 'Register'];

var usedLink = "file:///C:/Users/juanpablo.kirpach/Desktop/JP/JP/Curso%20Radium%20Rocket/Repositorio/BQA-10/login.html";

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

if(!changePageValidation(usedLink)){
  errors.unshift('The link to the other page is missing or incorrect.');
}

if(!requiredFields()){
  errors.unshift('At least one field is optional.');
}

if(!buttonContentValidation(buttonContent)){
  errors.unshift('Button content is incorrect.');
}

if(!inputLabelValidation()){
  errors.unshift('Some fields do not have associated labels.');
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

document.querySelector("#name").addEventListener("blur",validateName);
document.querySelector("#name").addEventListener("focus",hideValidationError);
document.querySelector("#email").addEventListener("blur",validateEmail);
document.querySelector("#email").addEventListener("focus",hideValidationError);
document.querySelector("#password").addEventListener("blur",validatePassword);
document.querySelector("#password").addEventListener("focus",hideValidationError);
document.querySelector("#rep-password").addEventListener("blur",validateRepPassword);
document.querySelector("#rep-password").addEventListener("focus",hideValidationError);

document.querySelector("button[type='submit']").addEventListener("click", submitFunction);
