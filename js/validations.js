function hideValidationError(e){
  var displayedAlert = e.target.parentElement.nextElementSibling;
  displayedAlert.style.display = 'none';
  var formButton = document.querySelector("button[type='submit']");
  formButton.disabled = false;
}


function validateName(e){
  if(e.target.value.length === 0){
    return;
  }
  if(!(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(e.target.value)) || e.target.value.length < 6){
    var nameAlert = document.querySelector("#wrong-name");
    nameAlert.style.display = 'block';
  }
}

function validateEmail(e){
  if(e.target.value.length === 0){
    return;
  }
  if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(e.target.value))){
    var emailAlert = document.querySelector("#wrong-email");
    emailAlert.style.display = 'block';
  }
}

function validatePassword(e){
  if(e.target.value.length === 0){
    return;
  }
  if (!(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(e.target.value))){
    var emailAlert = document.querySelector("#wrong-password");
    emailAlert.style.display = 'block';
  }
}

function validateRepPassword(e){
  var password = document.querySelector("#password");
  if(e.target.value !== password.value){
    var emailAlert = document.querySelector("#wrong-rep-password");
    emailAlert.style.display = 'block';
  }
}

function submitFunction(e){
  e.preventDefault()
  var inputValues = document.querySelectorAll(".label-type input");
  var alerts = document.querySelectorAll(".alert");
  var formButton = document.querySelector("button[type='submit']");
  var outputData = [];
  for(var i=0; i < alerts.length; i++){
    if(alerts[i].style.display === 'block'){
      formButton.disabled = true;
      return;
    }
  }
  for(var i = 0; i < inputValues.length; i++){
    if(inputValues[i].length !== 0){
      outputData.push(inputValues[i].value)
    }else{
      formButton.disabled = true;
      return;
    }
  }
  var listResults = document.getElementById('error-list');
  while (listResults.firstChild){
    listResults.firstChild.remove()
  }
  for(var i = 0; i < inputValues.length; i++){
    var displayedText = document.createTextNode(inputValues[i].value + '\n');
    listResults.appendChild(displayedText);
  }
  getUser()
}

async function getUser(){
  var email = document.querySelector("#email");
  fetch(`https://jsonplaceholder.typicode.com/users?email=${email.value}`)
  .then(function(response){
    return response.json();
  })
  .then(data => console.log(data))
  .catch()
};



