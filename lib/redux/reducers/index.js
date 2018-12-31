import { SET_FILTER } from "../action_types";

const initialState = {
  filter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      return { filter: action.payload.filter };
    }
    default:
      return state;
  }
}
