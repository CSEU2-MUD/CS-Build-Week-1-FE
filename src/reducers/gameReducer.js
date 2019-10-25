import { INITIALIZE, MOVE, START_COMMAND, GET_ROOMS } from '../actions/game';

const initialState = {
  loading: false,
  player: { uuid: '', name: '' },
  currentRoom: {},
  players: [],
  rooms: [],
  error: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COMMAND:
      return { ...state, loading: true, error: '' };
    case INITIALIZE:
      return {
        loading: false,
        player: {
          uuid: action.payload.uuid,
          name: action.payload.name,
        },
        currentRoom: {
          title: action.payload.title,
          description: action.payload.description,
        },
        players: action.payload.players,
        error: '',
      };
    case MOVE:
      return {
        ...state,
        loading: false,
        currentRoom: {
          title: action.payload.title,
          description: action.payload.description,
        },
        players: action.payload.players,
        error: action.payload.error_msg,
      };
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
      };
    default:
      return state;
  }
};

export default gameReducer;
