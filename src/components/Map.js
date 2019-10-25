import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DisplayMessage, MapContainer, Matrix } from './styling/map.style';
import Room from './Room';
import { generateMatrix } from '../helpers';

const Map = ({ error, rooms }) => {
  const [matrix, setMatrix] = useState([]);
  useEffect(() => {
    if (!matrix.length) {
      setMatrix(generateMatrix());
    }
    if (matrix.length && rooms && !matrix[0][0].id) {
      const mat = JSON.parse(JSON.stringify(matrix));
      rooms.map(room => (mat[24 - room.y][room.x] = room));
      setMatrix(mat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms]);

  return (
    <MapContainer>
      {error && <DisplayMessage>{error}</DisplayMessage>}
      <Matrix>
        {matrix.length &&
          matrix[0][0].id &&
          matrix.map(column =>
            column.map(room => {
              return <Room key={`${room.x}-${room.y}`} room={room} />;
            })
          )}
      </Matrix>
    </MapContainer>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  return {
    error: gameReducer.error,
    rooms: gameReducer.rooms,
  };
};

export default connect(mapStateToProps)(Map);
