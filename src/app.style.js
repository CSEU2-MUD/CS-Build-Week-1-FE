import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  html {
    font-size: 62.5%;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Caveat Brush', cursive, sans-serif;
    color: white;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #282c34;
  }

  .loading {
    animation: blink 1s ease-in-out infinite;
  }
  
  @keyframes blink {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
 }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
`;

export const Container = styled.div`
  margin: auto auto;

  h1 {
    font-size: 5rem;
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 15px;
  }

  a {
    font-size: 1.8rem;
    font-family: 'Press Start 2P', cursive;
    text-decoration: none;
  }
`;
