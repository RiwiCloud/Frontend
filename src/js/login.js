document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Evitar la recarga de la página

  // Obtener los valores del formulario
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Crear el objeto de datos para enviar
  const data = {
      Email: email,
      Password: password
  };

  try {
      // Enviar la solicitud POST al servidor
      const response = await fetch('http://localhost:5098/api/auth/Login', { // Cambia HTTPS por HTTP para desarrollo
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          const result = await response.json();
          console.log('Inicio de sesión exitoso', result);
          // Almacenar el token en el almacenamiento local o sesión
          localStorage.setItem('token', result.Token);
          // Redirigir a la página principal o mostrar un mensaje de éxito
          window.location.href = 'Index.html'; // Cambia a la URL de tu página principal
      } else {
          // Manejar errores de autenticación
          const error = await response.text();
          document.getElementById('error-message').innerText = error;
      }
  } catch (error) {
      console.error('Error al iniciar sesión', error);
      document.getElementById('error-message').innerText = 'Error al iniciar sesión';
  }
});
