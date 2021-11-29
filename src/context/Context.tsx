import React, { createContext, useContext, useState } from "react";
import { Pokemon } from "../models/pokemon";
import { PokeInfo } from "../models/pokemonInfo";
import api from "../services/api";

const PokeContext = createContext<Pokemon>({} as Pokemon);

const Context: React.FC = ({ children }) => {
  const [pokemonChosen, setPokemonChosen] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokeInfo.PokemonStats>();
  const [error, setError] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(true);

  const searchPokemon = async (pokemon: string) => {
    await api
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        setPokemon(response.data);
        setError(false);
        setDisplay(false);
      })
      .catch(() => setError(true));
  };

  return (
    <PokeContext.Provider
      value={{
        searchPokemon,
        pokemonChosen,
        setPokemonChosen,
        pokemon,
        error,
        display,
        setDisplay,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

function usePoke() {
  const context = useContext(PokeContext);

  if (!context) {
    throw new Error("O hook usePoke deve ser usado como Provider!");
  }
  return context;
}

export { Context, usePoke };
