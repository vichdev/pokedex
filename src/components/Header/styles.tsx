import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const Header = styled.header`
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid white;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const LogoTitle = styled.h1`
  font-family: "Pokemon-Normal";
  color: #fcd20b;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 1px 2px 3px black;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-around;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    top: 8px;
    font-size: 15px;
    padding: 1px;
    color: #fcd20b;
    cursor: default;
  }
`;

export const Nav = styled.input`
  height: 30px;
  border-radius: 9999em;
  border: 2px solid #fcd20b;
  background: none;
  color: #fcd20b;
  padding-left: 30px;
  position: relative;

  &:focus {
    box-shadow: 1px 1px 5px #fcd20b;
  }
  &::placeholder {
    color: #fcd20b;
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const NavButton = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  background: none;
  outline: none;
  position: relative;
  color: #fcd20b;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.175rem;
    left: 0;
    bottom: 0;
    background: #fcd20b;
    transform: scale(0, 1);
  }
  &:hover {
    letter-spacing: 1px;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition: transform 0.3s ease;
  }
`;
