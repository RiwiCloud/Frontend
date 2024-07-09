document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logout-button').addEventListener('click', function() {
        // Eliminar el token del almacenamiento local
        localStorage.removeItem('token');

        // Redirigir a la página de inicio de sesión
        window.location.href = 'Login.html'; // Cambia a la URL de tu página de inicio de sesión
    });
});
