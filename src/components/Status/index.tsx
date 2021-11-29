import React from "react";
import { usePoke } from "../../context/Context";
import { PokeInfo } from "../../models/pokemonInfo";
import * as Styles from "./styles";
import {
  GiBroadsword,
  GiChainedHeart,
  GiCrenulatedShield,
  GiExtraTime,
  GiClawSlashes,
  GiConvergenceTarget,
} from "react-icons/gi";
import { colorsPokemon } from "./colours";

const Status: React.FC = () => {
  const { pokemon, display } = usePoke();

  return (
    <Styles.SectionWrapper>
      <Styles.SectionContainer isOpen={display}>
        <Styles.PokemonContainer>
          <Styles.PokemonName>{pokemon?.name}</Styles.PokemonName>
          <Styles.PokemonImg src={pokemon?.sprites.front_default} />
          <Styles.TypeContainer>
            {pokemon?.types.map((item, index) => {
              return (
                <Styles.SpecieContentType
                  key={index}
                  type={colorsPokemon[item.type.name]}
                >
                  {item.type.name}
                </Styles.SpecieContentType>
              );
            })}
          </Styles.TypeContainer>
        </Styles.PokemonContainer>
        <Styles.StatsContainer>
          <Styles.StatsWrapper color={""}>
            <Styles.SpecieContent>
              <GiChainedHeart />
              Hp: {pokemon?.stats[0].base_stat}
            </Styles.SpecieContent>
          </Styles.StatsWrapper>
          <Styles.StatsWrapper color={""}>
            <Styles.SpecieContent>
              <GiBroadsword />
              Attack: {pokemon?.stats[1].base_stat}
            </Styles.SpecieContent>
          </Styles.StatsWrapper>
          <Styles.StatsWrapper color={""}>
            <Styles.SpecieContent>
              <GiClawSlashes />
              Sp. Attack: {pokemon?.stats[4].base_stat}
            </Styles.SpecieContent>
          </Styles.StatsWrapper>
          <Styles.StatsWrapper color={""}>
            <Styles.SpecieContent>
              <GiCrenulatedShield />
              Defense: {pokemon?.stats[2].base_stat}
            </Styles.SpecieContent>
          </Styles.StatsWrapper>
          <Styles.StatsWrapper color={""}>
            <Styles.SpecieContent>
              <GiConvergenceTarget />
              Sp. Defense: {pokemon?.stats[5].base_stat}
            </Styles.SpecieContent>
          </Styles.StatsWrapper>
          <Styles.StatsWrapper color={""}>
            <Styles.SpecieContent>
              <GiExtraTime />
              Speed: {pokemon?.stats[5].base_stat}
            </Styles.SpecieContent>
          </Styles.StatsWrapper>
        </Styles.StatsContainer>
      </Styles.SectionContainer>
    </Styles.SectionWrapper>
  );
};

export default Status;
