import React from 'react';
import { connect } from 'react-redux';
import { DisplayMessage, MapContainer } from './styling/map.style';

const Map = ({ error }) => {
  return (
    <MapContainer>
      {error && <DisplayMessage>{error}</DisplayMessage>}
    </MapContainer>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  return {
    error: gameReducer.error,
  };
};

export default connect(mapStateToProps)(Map);
