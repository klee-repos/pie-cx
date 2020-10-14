const SET_USERNAME = "SET_USERNAME";
const SET_SOCKET_ID = "SET_SOCKET_ID";
const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username,
  };
}

export function setSocketId(socketId) {
  return {
    type: SET_SOCKET_ID,
    socketId,
  };
}

export function setIsSignedIn(isSignedIn) {
  return {
    type: SET_IS_SIGNED_IN,
    isSignedIn,
  };
}

const initialState = {
  username: "",
  socketId: "",
  isSignedIn: false,
};

export default function apps(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username,
      });
    case SET_SOCKET_ID:
      return Object.assign({}, state, {
        socketId: action.socketId,
      });
    case SET_IS_SIGNED_IN:
      return Object.assign({}, state, {
        isSignedIn: action.isSignedIn,
      });
    default:
      return state;
  }
}
