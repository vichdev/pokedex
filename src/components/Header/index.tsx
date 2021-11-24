import React, { useState } from "react";
import * as Styles from "./styles";
import logo from "../../assets/pokemon.svg";
import { FiSearch } from "react-icons/fi";
import { usePoke } from "../../context/Context";

const Header: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { searchPokemon, pokemonChosen } = usePoke();
  const [error, setError] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <Styles.Header>
      <Styles.HeaderWrapper>
        <Styles.LogoWrapper>
          <Styles.Logo src={logo} />
          <Styles.LogoTitle>PokeStats</Styles.LogoTitle>
        </Styles.LogoWrapper>
        <Styles.NavWrapper>
          <Styles.InputWrapper>
            <Styles.Nav
              type="text"
              onChange={(e) => {
                setPokemonName(e.target.value);
              }}
            ></Styles.Nav>
            <FiSearch />
          </Styles.InputWrapper>
          <Styles.NavButton
            onClick={() => {
              searchPokemon(pokemonName);
              setDisplay(display);
            }}
          >
            Search
          </Styles.NavButton>
          {error ? <span>deu erro</span> : ""}
        </Styles.NavWrapper>
      </Styles.HeaderWrapper>
    </Styles.Header>
  );
};

export default Header;
