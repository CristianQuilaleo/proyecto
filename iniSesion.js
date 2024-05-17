// Función para iniciar sesión
function iniciarSesion() {
    // Obtener el correo electrónico y la contraseña
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    // Verificar si los campos están vacíos
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Simulación de verificación de credenciales (reemplaza con tu lógica real)
    // Aquí puedes verificar las credenciales con tu backend
    if (email === 'usuario@example.com' && password === 'contraseña') {
        alert('Inicio de sesión exitoso.'); // Muestra un mensaje de éxito
        // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión exitoso
        window.location.href = 'home.html';
    } else {
        // Muestra un mensaje de error y borra los datos de las casillas del formulario
        document.getElementById('mensajeError').innerText = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
        document.getElementById('exampleInputEmail1').value = ''; // Borra el valor del campo de correo electrónico
        document.getElementById('exampleInputPassword1').value = ''; // Borra el valor del campo de contraseña
    }
}
