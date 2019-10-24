import styled from 'styled-components';

export const GameContainer = styled.div`
  width: 100%;
  padding: 10px;

  main {
    display: flex;
    justify-content: space-between;
    width: 100%;

    section {
      display: flex;
      width: 70%;
      flex-direction: column;
    }
  }
`;
