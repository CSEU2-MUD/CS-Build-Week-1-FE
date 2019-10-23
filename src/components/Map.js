import React from 'react';
import { connect } from 'react-redux';
import './styling/map.css';

const Map = ({ error }) => {
  return (
    <div className="map-container border">
      {error && <p className="display-message">{error}</p>}
    </div>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  return {
    error: gameReducer.error,
  };
};

export default connect(mapStateToProps)(Map);
