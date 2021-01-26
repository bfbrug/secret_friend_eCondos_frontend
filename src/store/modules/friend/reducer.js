// import produce from 'immer';

const INITIAL_STATE = {};

export default function friend(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@friend/ADD_REQUEST':
      return action;
    default:
      return state;
  }
}
