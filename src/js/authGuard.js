document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el token está presente en el almacenamiento local
    const token = localStorage.getItem('token');

    if (!token) {
        // Si no hay token, redirigir al usuario a la página de inicio de sesión
        window.location.href = 'Login.html'; // Cambia a la URL de tu página de inicio de sesión
    }
});
