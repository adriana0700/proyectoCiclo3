let registros = [{correo:"juan@gmail.com", contrasena: "SecurePassword123"}];


function login(){
  const correo = document.getElementById("correo").value; 
  const contrasena = document.getElementById("contrasena").value;
  const valor = document.getElementById('captcha').value;
  let email;
  let pass;
  if((email= registros.find(e => e.correo == correo)) && (pass = registros.find(e => e.contrasena == contrasena))){

    if(validarCAPTCHA(valor)){
  
      
                    
        return true;
     } 

  }          
  
  return false;
  
} 

function agregarRegistro(){
    let registro = document.getElementsByTagName("input");
        
    let datosUsuario = {
        'nombre' : registro[0].value,
        'apellido' : registro[1].value,
        'telefono' : registro[2].value,
        'correo' : registro[3].value,
        'password' : registro[4].value
    }
    registros.push(datosUsuario); 
    console.log(registros);
} 

function validarCAPTCHA(valor) {
    if (Number(valor) === 1000) {
      return true;
    } else {
      return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;