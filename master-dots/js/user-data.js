// JS PARA ALMACENAMIENTO DE DATOS DE USUARIO

//VARIABLES
let sessionData = {
    user: '',
    email: '',
    size: ''
}

// SESSION STORAGE
function setUserData(nick, email,size) {
    sessionStorage.setItem('nick',nick);
    sessionStorage.setItem('email',email);
    sessionStorage.setItem('size',size);
}

function getUserData(){
    sessionData.user = sessionStorage.getItem('nick');
    sessionData.email = sessionStorage.getItem('email');
    sessionData.size = sessionStorage.getItem('size');
    return sessionData;
}

function checkUserData(){
    if(sessionData.user === null || sessionData.size === null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario. Por favor, rellene todos los campos obligatorios');
        return false;
    }
    return true;
}

function setHistoryData(nick){
    let historyStorage=localStorage.getItem('history');
    let history;
    let date = new Date();
    
    if(historyStorage === null){
        history=[];
    }else{
        history=JSON.parse(historyStorage);
    }
    let userData={
        user: nick,
        date: date.toLocaleString('es-ES', {weekday: 'short', day: '2-digit',
            month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})
    }
    history.push(userData);
    localStorage.setItem('history',JSON.stringify(history));
}