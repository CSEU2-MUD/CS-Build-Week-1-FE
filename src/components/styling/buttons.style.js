import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
`;

export const DirectionButton = styled.button`
  margin: 10px 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  color: black;
  font-size: 2.5rem;
  background: white;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 3px solid dodgerblue;
  }
`;
