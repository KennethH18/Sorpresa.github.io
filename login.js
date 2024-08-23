document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales
    if (username === 'Cosmiatra' && password === '20/08') {
        // Redirigir a una página de bienvenida o a otra sección
        window.location.href = 'bienvenida.html'; // Cambia esta página según sea necesario
    } else {
        // Mostrar mensaje de error
        document.getElementById('error').style.display = 'block';
    }
});
