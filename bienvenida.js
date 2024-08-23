document.addEventListener('DOMContentLoaded', function() {
    const giftButton = document.getElementById('gift-button');
    const giftImageContainer = document.getElementById('gift-image-container');

    giftButton.addEventListener('click', function() {
        // Alterna la visibilidad del contenedor de la imagen
        if (giftImageContainer.style.display === 'none' || giftImageContainer.style.display === '') {
            giftImageContainer.style.display = 'block';
        } else {
            giftImageContainer.style.display = 'none';
        }
    });
});

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});