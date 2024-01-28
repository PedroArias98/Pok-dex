const Pokemon = ({ pokemon, loading, error }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        className=""
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={200}
      ></img>
      <ul>
        {pokemon.stats.map((item) => (
          <Stat key={item.stat.name} item={item}></Stat>
        ))}
      </ul>
    </div>
  );
};

const Stat = ({ item }) => {
  return (
    <li>
      <span>
        <b>{item.stat.name}:</b>
        <span>{item.base_stat}</span>
      </span>
    </li>
  );
};

export { Pokemon, Stat };
