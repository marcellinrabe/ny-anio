import { UPDATE_FILTER_ACTION } from "./filterReducer";

export const updateFilter = (filter="") => ({
    type: UPDATE_FILTER_ACTION,
    payload: filter
})