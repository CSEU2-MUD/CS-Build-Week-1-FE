import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;
  padding: 5px 0;

  h1 {
    font-size: 2rem;
    font-family: 'Press Start 2P', cursive;
  }

  div {
    font-size: 1.8rem;
    border: 1px solid white;
    padding: 5px 10px;
    cursor: pointer;
  }
`;
