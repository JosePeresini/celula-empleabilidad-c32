// Datos:
// Equipos de Entrenadores:

const entrenadores = [
	{
		nombre: "Entrenador 1",
		equipo: [
			{ nombre: "Charizard", nivel: 25, tipo: "Fuego" },
			{ nombre: "Blastoise", nivel: 22, tipo: "Agua" },
			{ nombre: "Venusaur", nivel: 28, tipo: "Planta" },
			{ nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
			{ nombre: "Machamp", nivel: 27, tipo: "Pelea" },
			{ nombre: "Gengar", nivel: 26, tipo: "Fantasma" },
		],
	},
	{
		nombre: "Entrenador 2",
		equipo: [
			{ nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
			{ nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
			{ nombre: "Meganium", nivel: 33, tipo: "Planta" },
			{ nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
			{ nombre: "Lucario", nivel: 31, tipo: "Pelea" },
			{ nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" },
		],
	},
	{
		nombre: "Entrenador 3",
		equipo: [
			{ nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
			{ nombre: "Swampert", nivel: 37, tipo: "Agua" },
			{ nombre: "Sceptile", nivel: 38, tipo: "Planta" },
			{ nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
			{ nombre: "Gallade", nivel: 40, tipo: "Pelea" },
			{ nombre: "Banette", nivel: 41, tipo: "Fantasma" },
		],
	},
	{
		nombre: "Entrenador 4",
		equipo: [
			{ nombre: "Infernape", nivel: 42, tipo: "Fuego" },
			{ nombre: "Empoleon", nivel: 43, tipo: "Agua" },
			{ nombre: "Torterra", nivel: 44, tipo: "Planta" },
			{ nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
			{ nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
			{ nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" },
		],
	},
	{
		nombre: "Entrenador 5",
		equipo: [
			{ nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
			{ nombre: "Samurott", nivel: 49, tipo: "Agua" },
			{ nombre: "Serperior", nivel: 50, tipo: "Planta" },
			{ nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
			{ nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
			{ nombre: "Chandelure", nivel: 53, tipo: "Fantasma" },
		],
	},
];

console.log("----------------------------------------------------");

// Desafio 1: Pokémon con Mayor y Menor Nivel
// función que retorne el pokemon con el mayor nivel y
// el con el menor nivel entre todos los equipos de los cinco entrenadores.

function pokemonMinMax(entrenadores) {
	let pokemonMayorNivel = null;
	let pokemonMenorNivel = null;

	for (const entrenador of entrenadores) {
		for (const pokemon of entrenador.equipo) {
			if (!pokemonMayorNivel || pokemon.nivel > pokemonMayorNivel.nivel) {
				pokemonMayorNivel = pokemon;
			}

			if (!pokemonMenorNivel || pokemon.nivel < pokemonMenorNivel.nivel) {
				pokemonMenorNivel = pokemon;
			}
		}
	}

	return {
		pokemonMayorNivel,
		pokemonMenorNivel,
	};
}

console.log(pokemonMinMax(entrenadores));

console.log("----------------------------------------------------");

// Desafío 2: Buscador
// función que devuelva todos los pokemones que contengan un string pasado como
// argumento. No puede devolver undefined.

function buscarString(nombrePokemon) {
	const pokemonEncontrado = [];

	for (const entrenador of entrenadores) {
		for (const pokemon of entrenador.equipo) {
			if (pokemon.nombre.toLowerCase().includes(nombrePokemon.toLowerCase())) {
				pokemonEncontrado.push(pokemon);
			}

			if (pokemonEncontrado.length === 0) {
				return `No se encontraron Pokémon con el nombre "${nombrePokemon}".`;
			}
		}
	}

	return pokemonEncontrado;
}

console.log(buscarString("Charizard"));

console.log("----------------------------------------------------");

// Desafío 3: Tipo con Promedio de Nivel Más Alto
// función que retorne el tipo cuyos Pokémon tienen un promedio de nivel mayor.

function promedioNivel(entrenadores) {
	const tipos = {};

	for (const entrenador of entrenadores) {
		for (const pokemon of entrenador.equipo) {
			if (!tipos[pokemon.tipo]) {
				tipos[pokemon.tipo] = { totalNivel: 0, cantidad: 0 };
			}
			tipos[pokemon.tipo].totalNivel += pokemon.nivel;
			tipos[pokemon.tipo].cantidad++;
		}
	}

	const promedios = Object.entries(tipos).map(
		([tipo, { totalNivel, cantidad }]) => {
			return { tipo, promedio: totalNivel / cantidad };
		}
	);

	const tipoMayorPromedio = promedios.reduce((prev, curr) => {
		return prev.promedio > curr.promedio ? prev : curr;
	});

	return tipoMayorPromedio;
}

console.log(promedioNivel(entrenadores));
