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
  min-height: 150px;
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

  p {
    margin: 5px;
    font-size: 1.8rem;
  }
`;
