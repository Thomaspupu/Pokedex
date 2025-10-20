function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

interface PokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}
export default PokemonCard;
