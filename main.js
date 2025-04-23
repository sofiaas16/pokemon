// Cuando se le da click al botón con el ID 'addPokemon', se ejecuta la función addPokemon
document.getElementById('addPokemon').addEventListener('click', addPokemon);

// Esta función se encarga de agregar un nuevo Pokémon a la galería
function addPokemon() {
    // Aquí tomamos el valor que escribió el usuario en el campo del nombre del Pokémon
    const name = document.getElementById('pokemonName').value;
    // Aquí tomamos el valor de la URL de la imagen del Pokémon
    const imageUrl = document.getElementById('pokemonImage').value;

    // Verificamos que ambos campos estén llenos (nombre e imagen)
    if (name && imageUrl) {

        // Obtenemos la parte del HTML donde se mostrarán las tarjetas (galería)
        const gallery = document.getElementById('gallery');

        // Creamos una tarjeta nueva con el nombre y la imagen que el usuario puso
        const card = createCard(name, imageUrl);

        // Insertamos esa tarjeta al final de la galería
        gallery.insertAdjacentElement('beforeend', card);

        // Limpiamos los campos de entrada para que el usuario pueda poner otro Pokémon
        document.getElementById('pokemonName').value = '';
        document.getElementById('pokemonImage').value = '';

    } else {
        // Si el usuario no puso nombre o imagen, mostramos un mensaje de alerta
        alert('Por favor, completa ambos campos.');
    }
}


// Esta función se encarga de crear una tarjeta con la info del Pokémon
function createCard(name, imageUrl) {
    // Creamos el contenedor de la tarjeta
    const card = document.createElement('div');
    card.className = 'card'; // Le damos una clase para que se vea como tarjeta
    card.onclick = () => replaceImage(card); // Si se le da click, se puede cambiar la imagen

    // Creamos la imagen del Pokémon y le ponemos su URL y texto alternativo (alt)
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = name;

    // Creamos el título (el nombre del Pokémon)
    const title = document.createElement('h3');
    title.textContent = name;

    // Creamos un botón con una 'X' para eliminar la tarjeta
    const button = document.createElement('button');
    button.textContent = 'X';
    // Cuando se le da click a la 'X', se ejecuta la función que borra la tarjeta
    button.onclick = (event) => removeCard(event);

    // Añadimos todos los elementos dentro de la tarjeta
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);

    // Retornamos la tarjeta ya armada
    return card;
}


// Esta función elimina una tarjeta cuando se le da click a la 'X'
function removeCard(event) {
    event.stopPropagation(); // Esto es para que no se active el cambio de imagen por accidente
    const card = event.target.parentElement; // Subimos hasta la tarjeta
    card.remove(); // Borramos la tarjeta del HTML
}

// Esta función cambia la imagen cuando haces click en la tarjeta
function replaceImage(card) {
    // Le pedimos al usuario que escriba una nueva URL para la imagen
    const newImageUrl = prompt('Introduce la nueva URL de la imagen:');
    if (newImageUrl) {
        const img = card.querySelector('img'); // Buscamos la imagen actual
        const newImg = document.createElement('img'); // Creamos una nueva imagen
        newImg.src = newImageUrl;
        newImg.alt = img.alt; // Mantenemos el mismo nombre en el alt

        // Reemplazamos la imagen vieja por la nueva en la tarjeta
        card.replaceChild(newImg, img);
        // Le damos una pequeña animación para que se vea más cool
        animateCard(card);
    }
}

// Esta función le pone una animación a la tarjeta cuando se cambia la imagen
function animateCard(card) {
    const keyframes = [
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(1.1)', opacity: 0.8 },
        { transform: 'scale(1)', opacity: 1 }
    ];
    const options = {
        duration: 500, // Dura medio segundo
        easing: 'ease-in-out', // Hace la animación suave
        fill: 'forwards' // Mantiene el último estado de la animación
    };
    card.animate(keyframes, options); // Se ejecuta la animación
}