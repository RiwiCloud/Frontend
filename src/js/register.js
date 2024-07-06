document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5098/api/Users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("Error: " + errorData.message);
        return;
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      alert("Registro exitoso!");

      // Puedes redirigir al usuario a otra página después del registro exitoso
      // window.location.href = 'https://tudominio.com/login';
    } catch (error) {
      console.error("Error:", error);
      alert("Error al registrar usuario.");
    }
  });
});
