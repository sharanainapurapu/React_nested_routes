import { ACTION_TYPES } from "../actions/actionTypes"

export default function userReducer(state = false, action) {
    switch (action.type) {
        case ACTION_TYPES.TOOGLE_AUTH:
            return action.status;
        default:
        return state
    }
  }