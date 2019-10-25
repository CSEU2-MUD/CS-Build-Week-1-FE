import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 2px solid white;
  margin-left: 10px;
`;

export const SubContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
  overflow-y: auto;
  border: 2px solid white;
  height: 174px;
  padding-bottom: 5px;

  & > h2 {
    background: white;
    color: black;
    width: 100%;
    padding: 5px;
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.column ? 'column' : 'row')};

  p {
    margin: 5px;
    font-size: 1.8rem;
  }

  form {
    width: 100%;

    input,
    button {
      width: 100%;
      padding: 5px;
      font-size: 1.5rem;
      color: black;
    }
    button {
      cursor: pointer;
    }
  }
`;
