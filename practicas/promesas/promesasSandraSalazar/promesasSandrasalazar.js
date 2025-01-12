

function obtenerPokemonSquirtle() {
    const url = 'https://pokeapi.co/api/v2/pokemon/squirtle';
    fetch(url)
        .then(respuesta => respuesta.json()) // Convierto mi respuesta en un objeto JSON
        .then(data => {
            console.log('ID pokemon: ', data.id + ' Nombre Pokemon: ', data.name + ' Tipo de pokemon: ', data.types[0].type.name);
            for (let i = 0; i < data.abilities.length; i++) { 
                console.log('habilidad', data.abilities[i].ability.name);
            }
            for (let i = 0; i < data.moves.length; i++) { 
                console.log('movimiento', data.moves[i].move.name);
            }
            for (let i = 0; i < data.weight.length; i++) { 
                console.log('peso', data.weight[i].weight.name);
            }
        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
};

obtenerPokemonSquirtle();
