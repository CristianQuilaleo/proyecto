// Función para iniciar sesión
function iniciarSesion() {
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Verificar si las credenciales coinciden con los datos almacenados
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Inicio de sesión exitoso.');
        // Redirigir al usuario a la página deseada después del inicio de sesión exitoso
        window.location.href = 'home.html';
    } else {
        document.getElementById('mensajeError').innerText = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
        document.getElementById('exampleInputEmail1').value = '';
        document.getElementById('exampleInputPassword1').value = '';
    }
}
