//VALIDACIÓN CAMPOS FORMULARIO

// CONSTANTES 
const nickInput = document.getElementById('nick');
const emailInput = document.getElementById('email');
const sizeInput = document.getElementById('game-size');
const submitBtn = document.getElementById('submit');
const errorMsg1 = document.getElementById("error1");
const errorMsg2 = document.getElementById("error2");
const nickPattern = new RegExp("(?<!\S)[0-9]");
const emailPattern = new RegExp("^[\\w-\.]+@([\\w-]+\.)+[\\w-]{2,4}$");

// VARIABLES
let nick = '';
let email = '';
let sizeOption = '';
let size = '';

// EVENT LISTENERS
submitBtn.addEventListener('click', validateForm);

// PROCEDIMIENTO
checkError();

// FUNCIONES DE PROCEDIMIENTO
function checkError(){
    let error = sessionStorage.getItem('error');
    if (error){
        errorMsg1.textContent = error.toString();
    }
}

// FUNCIONES DE EVENTOS
function validateForm(event){
    nick = nickInput.value.toString();
    email = emailInput.value.toString();
    sizeOption = sizeInput.value.toString();
    size = sizeInput.value.textContent;
    // RESET ERROR TEXTS
    errorMsg1.textContent = '';
    errorMsg2.textContent = '';
    
   if (nick.length === 0 || sizeOption === '0'){
       event.preventDefault();
       if (nick.length === 0){
           nickInput.focus();
           errorMsg1.textContent = "* Por favor, introduzca todos los campos obligatorios";
       } else {
           sizeInput.focus();
           errorMsg2.textContent = "* Por favor, introduzca todos los campos obligatorios";
       }
       return false;
   } else if (email.length !== 0){
        if (!emailPattern.test(email)){
            event.preventDefault();
            emailInput.focus();
            errorMsg2.textContent = "* Por favor, introduzca un email valido. Ej: example@gmail.com";
            return false;
        }
   } else {
       if (nickPattern.test(nick)){
           event.preventDefault();
           nickInput.focus();
           errorMsg1.textContent = "* El nombre de usuario no puede empezar por un número";
           return false;
       }
   }
   setUserData(nick, email, size);
   return true;
}