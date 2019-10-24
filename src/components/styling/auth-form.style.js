import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 0 auto;

  h2 {
    margin-top: 50px;
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 3rem;
    }

    input {
      font-size: 1.8rem;
      border-radius: 3px;
      margin: 5px 0;
      padding: 10px;
      color: black;
    }
  }
`;

export const AuthFormFooter = styled.div`
  text-align: center;

  button {
    margin: 10px;
    font-size: 1.8rem;
    background: none;
    padding: 5px;

    span {
      font-size: 1.8rem;
      color: dodgerblue;
    }

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 1.8rem;
  cursor: pointer;
  color: black;
`;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  text-align: center;
  font-size: 1.8rem;
  color: white;
`;
