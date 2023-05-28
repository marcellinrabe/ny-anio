
const initialState = {isError: false, errorText: ""}

export const SET_ERROR_ACTION = "error/set"

export const errorReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case SET_ERROR_ACTION:
            if(action.payload.trim() === "")
            {
                return initialState
            }
            else
            {
                return {isError: true, errorText: action.payload}
            }
        default:
            return state
    }

}