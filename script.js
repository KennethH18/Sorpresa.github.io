// Obtiene el elemento del botón "Sí"
const btnSi = document.getElementById('si');

// Configura el evento de click para el botón "Sí"
btnSi.addEventListener('click', () => {
    // Redirige a parte2.html
    window.location.href = 'login.html';
});

// Obtiene el elemento del botón "No"
const btnNo = document.getElementById('no');

// Configura el evento de mouseover para el botón "No"
btnNo.addEventListener('mouseover', () => {
    // Obtener el tamaño de la ventana y del botón
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;
    
    // Calcular posiciones aleatorias dentro de los límites de la ventana
    const maxX = windowWidth - btnWidth; // Limita X para que el botón no se mueva fuera de la pantalla
    const maxY = windowHeight - btnHeight; // Limita Y para que el botón no se mueva fuera de la pantalla
    
    // Generar posiciones aleatorias dentro de los límites
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
    
    // Aplicar las nuevas coordenadas al botón
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});
