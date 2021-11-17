// const submit = document.getElementById("btn-submit-form");
// //se crea un evento de botón desde donde se va a envíar el email
// submit.addEventListener('click', validacion);
// //esta es la función en el botón que va a verificar los datos en el formulario. Es acá adentro donde debería ponerse la función que verifique cada campo específico
// //dentro de un if
// function validacion(e){
//     ///e.preventDefault();

//     if(checkCorreo(email)){//acá se llama la función checkCorreo que valida el campo del correo
//     }

//     if(checkContrasena(contrasena)){//acá se llama la función checkContrasena que valida el campo de la contraseña

//     }
//     if(checkTelefono(telefono)){//acá se llama la función checkTelefono que valida el campo del telefono
//     }
//     if (checkNombre(nombre)){// Aca se llama la funcion checkNombre que valida el campo contraseña

//     }
//     if (checkApellido(apellido)){//Aca se llama la funcion checkApellido que valida el campo contraseña

//     }
//     //si pasa todas las validaciones devuelve true
//     return true
  
// }
// acá se crean las funciones específicas para cada campo

var nombre = document.getElementById("nombre");
function  checkNombre(nombre){   
    debugger; 
    if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{4,30}$/.test(nombre)){
        return true;
    }
    else{
        return false;
    }
}
module.exports.checkNombre=checkNombre;


var apellido = document.getElementById("apellido");
function  checkApellido(apellido){ 
    
    debugger;
    if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{4,30}$/.test(apellido)){
        return true;
    }
    else{
        return false;
    } 
}
module.exports.checkApellido=checkApellido;


var telefono = document.getElementById("telefono");
function checkTelefono(telefono){
    debugger;
    if(/^\d{7}$/.test(telefono)){
        return true;
    }
    else{
        return false;
    }
}
modile.exports.checkTelefono=checkTelefono;


var email = document.getElementById("email");
function checkCorreo(email){
    debugger;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return true;
    }
    else{
        return false;
    }
}

module.exports.checkCorreo=checkCorreo;


var contrasena = document.getElementById("contrasena");
function checkContrasena(contraseña){
    debugger;
    if(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(contraseña)){
        return true;
    }
    else{
        alert("error")
        return false;
    }
}

module.exports.checkContrasena=checkContrasena;

