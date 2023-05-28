import { SET_ERROR_ACTION } from "./errorReducer";

export const setErrorAction = (error) => ({
    type: SET_ERROR_ACTION,
    payload: error
})