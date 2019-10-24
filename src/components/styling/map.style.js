import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 783px;
  margin-bottom: 10px;
  border: 2px solid white;
`;

export const DisplayMessage = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 1.5rem;
  background-color: white;
  width: 100%;
  color: brown;
  text-align: center;
`;

export const Matrix = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 760px;
  margin: 0 auto;
  justify-content: space-between;
`