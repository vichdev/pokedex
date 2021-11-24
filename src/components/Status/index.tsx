import React, { useEffect, useState } from "react";
import { usePoke } from "../../context/Context";
import { PokeInfo } from "../../models/pokemonInfo";
import * as Styles from "./styles";

const Status: React.FC = () => {
  const { pokemonChosen, pokemon, searchPokemon, error } = usePoke();

  return (
    <Styles.SectionWrapper>
      <>
        <Styles.PokemonContainer>
          {error ? (
            <Styles.Error>Digite o nome de um Pokemon válido.</Styles.Error>
          ) : (
            ""
          )}
          <Styles.PokemonName>{pokemon?.name}</Styles.PokemonName>
          <Styles.PokemonImg src={pokemon?.sprites.front_default} />
          <Styles.TypeContainer>
            {pokemon?.types.map((item, index) => {
              return (
                <Styles.SpecieContentType key={index}>
                  {item.type.name}
                </Styles.SpecieContentType>
              );
            })}
          </Styles.TypeContainer>
        </Styles.PokemonContainer>
        <Styles.StatsContainer>
          <Styles.SpecieContent>
            Hp: {pokemon?.stats[0].base_stat}
          </Styles.SpecieContent>
          <Styles.SpecieContent>
            Attack: {pokemon?.stats[1].base_stat}
          </Styles.SpecieContent>
          <Styles.SpecieContent>
            Sp. Attack: {pokemon?.stats[4].base_stat}
          </Styles.SpecieContent>
          <Styles.SpecieContent>
            Defense: {pokemon?.stats[2].base_stat}
          </Styles.SpecieContent>
          <Styles.SpecieContent>
            Sp. Defense: {pokemon?.stats[5].base_stat}
          </Styles.SpecieContent>
          <Styles.SpecieContent>
            Speed: {pokemon?.stats[5].base_stat}
          </Styles.SpecieContent>
        </Styles.StatsContainer>
      </>
    </Styles.SectionWrapper>
  );
};

export default Status;
