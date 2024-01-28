import Digimon from "./Digimon";
import { Pokemon } from "./Pokemon";
import { useEffect, useState } from "react";

function List() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);

  const randomId = Math.floor(Math.random() * 806 + 1); //creamos un numero aleatorio entre 1 y 807
  const [pokemonId, setPokemonId] = useState(randomId);

  const randomPokemon = () => {
    return Math.floor(Math.random() * 806 + 1);
  };

  const [randomPkmn, setRandomPkmn] = useState(randomPokemon);

  useEffect(() => {
    // async function fetchData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkmn}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //si todo sale bien, actualizamos el pokemon e indicamos que no hay error
        console.log(data);
        setPokemon(data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [randomPkmn]);

  return (
    <div>
      <h2>Pokedex</h2>
      <button
        onClick={() => {
          setRandomPkmn(randomPokemon);
        }}
      >
        Random Pokemon
      </button>

      {loading ? <div>Loading...</div> : <Pokemon pokemon={pokemon} />}
    </div>
  );
}

export default List;
