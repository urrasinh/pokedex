const pokemonNombre = document.querySelector("#pokemon-nombre");
const pokemonTabla = document.querySelector("#pokemon-tabla");
const pokemonImagen = document.querySelector("#pokemon-imagen");
const pokemonFormulario = document.querySelector("#pokemon-formulario");
const pokemonBuscar = document.querySelector("#pokemon-buscar");

pokemonFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemon = pokemonBuscar.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((respuesta) => {
        respuesta.json().then((data) => {
            console.log(data);
            const nombre = data.name;
            const peso = data.weight;
            const altura = data.height;
            const tipo = data.types[0].type.name;
            const imagen = data.sprites.front_default;

            pokemonNombre.innerHTML = nombre;

            pokemonTabla.innerHTML = `
            <tr>
                <td>Peso</td>
                <td>${peso}</td>
            </tr>
            <tr>
                <td>Altura</td>
                <td>${altura}</td>
            </tr>
            <tr>
                <td>Tipo</td>
                <td>${tipo}</td>
            </tr>
        `;

            pokemonImagen.innerHTML = `
            <img src="${imagen}" alt="${nombre}">
        `;
        });
    });
});