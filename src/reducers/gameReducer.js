import { INITIALIZE, MOVE, START_COMMAND } from '../actions/game';

const initialState = {
  loading: false,
  player: null,
  currentRoom: {},
  players: [],
  error: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COMMAND:
      return { ...state, loading: true, error: '' };
    case INITIALIZE:
      return {
        loading: false,
        player: action.payload.name,
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
    default:
      return state;
  }
};

export default gameReducer;
