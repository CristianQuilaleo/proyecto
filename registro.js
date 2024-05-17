// Función para validar el formulario de registro y guardar los datos
function validarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var direccion = document.getElementById('direccion').value;
    var region = document.getElementById('region').value;
    var ciudad = document.getElementById('ciudad').value;

    // Validar campos obligatorios y contraseñas
    if (password !== confirm_password) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    if (nombre === '' || email === '' || password === '' || confirm_password === '') {
        alert('Por favor complete todos los campos.');
        return false;
    }
    // ...

    // Guardar datos en el almacenamiento local
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellidos', apellidos);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('direccion', direccion);
    localStorage.setItem('region', region);
    localStorage.setItem('ciudad', ciudad);

    // Mostrar mensaje de registro exitoso en la página
    var mensajeRegistro = document.getElementById('mensajeRegistro');
    mensajeRegistro.innerText = 'Registro exitoso. ¡Ahora puedes iniciar sesión!';

    // Limpiar campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm_password').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('region').value = '';
    document.getElementById('ciudad').value = '';
}
