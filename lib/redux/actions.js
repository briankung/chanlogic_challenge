import { SET_FILTER } from "./action_types";

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
