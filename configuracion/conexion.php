<?php

include 'global.php';
$conexion = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
// $conexion = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);


if (mysqli_connect_errno()){
    echo 'fallo de conexion: %s\n', mysqli_connect_errno();

}else{
    echo 'conexion exitosa';
}
//recibir datos y almacenarlos por variables
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$contraseña = $_POST["contraseña"];

//consulta para insertar
$insertar = "INSERT INTO usuario(nombre, apellido, telefono, email, contraseña)VALUES('$nombre',
'$apellido', '$telefono', '$email', '$contraseña')";

//ejecutar conusulta
$datos_insertados= mysqli_query($conexion,  $insertar);
if (!$datos_insertados){
    echo "error al registrarse";
}else{
    echo '<script>
            alert("usuario registrado exitosamente"); 
            window.history.go(-1);
        </script>';
    exit;
}

//consulta para mostrarloc campos nombre, apellido y correo y ordenar de forma ascendente el nombre
$seleccionar = " SELECT nombre, apellido, email FROM usuario ORDER BY nombre;" ;
//ejecutar consulta
$ordenarNombre= mysqli_query($conexion,  $seleccionar);
//consulta para mostrarloc campos nombre, apellido y teleono y ordenar de forma descendente por el campo telefono
$seleccionarTelefono = " SELECT nombre, apellido, telefono FROM Usuario ORDER BY telefono DESC;" ;
//ejecutar consulta
$ordenarTelefono= mysqli_query($conexion,  $seleccionarTelefono);
//consulta para obtener corres gmail El LIKEoperador se usa en una WHERE para buscar un patrón específico en una columna.
$filtarCorreo= "SELECT *FROM usuario where email like '%@gmail.com'";
//ejecutar cnsulta
$ordenarCorreo= mysqli_query($conexion,  $filtarCorreo);
