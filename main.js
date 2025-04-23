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