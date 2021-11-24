import { PokeInfo } from "./pokemonInfo";

export interface Pokemon {
  searchPokemon: (pokemon: string) => void;
  pokemonChosen?: boolean;
  setPokemonChosen: (pokemonChosen: boolean) => void;
  pokemon?: PokeInfo.PokemonStats;
  error?: boolean;
}
