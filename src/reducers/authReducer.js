import { AUTHENTICATE, LOGOUT } from "../actions/authAction.actions";

const initialState = {
  token: null,
  userId: null,
  expiryTime: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        expiryTime: action.expiryTime
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
