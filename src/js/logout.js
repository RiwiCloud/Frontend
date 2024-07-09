document.addEventListener('DOMContentLoaded', function () {
    // Agrega el evento de clic a los botones de cierre de sesión
    document.getElementById('logout-button').addEventListener('click', handleLogout);
    document.getElementById('logout-button2').addEventListener('click', handleLogout);

    // Función de cierre de sesión
    function handleLogout() {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        window.location.href = 'Login.html'; // Redirige a la página de inicio de sesión
    }
});

