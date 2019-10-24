import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
`;

export const DirectionButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  color: black;
  font-size: 1.5rem;
  background: white;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 3px solid dodgerblue;
  }
`;
