import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button type="button" onClick={() => setPokemonName(pokemonList[0].name)}>
        {pokemonList[0].name}
      </button>
      <button type="button" onClick={() => setPokemonName(pokemonList[1].name)}>
        {pokemonList[1].name}
      </button>
    </div>
  );
}

export default App;
