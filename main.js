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
