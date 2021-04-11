/*function nameValidation(){
  var fullName = getElementById('name')
  console.log(fullName)
  if (!(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(fullName.value)) || fullName.value.length < 6){
    var wrongNameDiv = document.querySelector('#wrong-name');
    wrongNameDiv.style.display = 'block';
  }
}*/

function hideValidationError(e){
  var displayedAlert = e.target.parentElement.nextElementSibling;
  displayedAlert.style.display = 'none';
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
  var password = document.querySelector("#password")
  if(e.target.value !== password.value){
    var emailAlert = document.querySelector("#wrong-rep-password");
    emailAlert.style.display = 'block';
  }
}