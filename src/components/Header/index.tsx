import React, { useState } from "react";
import * as Styles from "./styles";
import logo from "../../assets/pokemon.svg";
import { FiSearch } from "react-icons/fi";
import { usePoke } from "../../context/Context";

const Header: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { searchPokemon, error, display, pokemon } = usePoke();

  return (
    <Styles.Header>
      <Styles.HeaderWrapper>
        <Styles.LogoWrapper>
          <Styles.Logo src={logo} alt="Pokemon Pikachu" />
          <Styles.LogoTitle>PokeStats</Styles.LogoTitle>
        </Styles.LogoWrapper>
        <Styles.NavWrapper>
          <Styles.InputWrapper>
            <Styles.Nav
              type="text"
              placeholder="Digite o nome ou index do Pokemon..."
              onChange={(e) => {
                setPokemonName(e.target.value);
              }}
            ></Styles.Nav>
            <FiSearch />
            {error ? (
              <Styles.Error>Digite o nome de um Pokemon válido.</Styles.Error>
            ) : (
              ""
            )}
          </Styles.InputWrapper>
          <Styles.NavButton
            onClick={() => {
              searchPokemon(pokemonName);
            }}
          >
            Search
          </Styles.NavButton>
        </Styles.NavWrapper>
      </Styles.HeaderWrapper>
    </Styles.Header>
  );
};

export default Header;
