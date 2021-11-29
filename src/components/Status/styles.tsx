import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 600px;
  margin-top: 50px;
  border: 2px solid white;
  box-shadow: 1px 1px 5px #000;
  background-color: #00b1f7;
`;

export const SectionContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "none" : "flex")};
  justify-content: space-around;
  align-items: center;
  height: 600px;
`;

export const PokemonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  text-align: center;
`;

export const PokemonName = styled.h1`
  color: #fcd20b;
  text-transform: uppercase;
  text-shadow: 1px 2px 3px black;
`;

export const PokemonImg = styled.img`
  width: 250px;
  height: 250px;
  border: none;
`;

export const SpecieContentType = styled.span<{ type: string }>`
  width: 150px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  padding: 10px;
  border-radius: 9999em;
  border: 3px solid white;
  box-shadow: 0px 1px 1px 2px black;
  background-color: ${(props) => props.type};
  text-transform: uppercase;
  text-shadow: 1px 2px 3px black;
`;

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const StatsWrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  text-align: center;
  svg {
    color: ${(props) => (props?.color ? props?.color : "#000")};
    height: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: default;
    margin-right: 20px;
  }
`;

export const SpecieContent = styled.span`
  font-size: 40px;
  color: #fcd20b;
  text-shadow: 1px 2px 3px black;
`;
