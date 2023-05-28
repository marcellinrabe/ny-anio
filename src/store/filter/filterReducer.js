
const initialState = ""

export const UPDATE_FILTER_ACTION = "filter/update"

export const filterReducer = (state=initialState, action) =>
{
    switch(action.type)
    {
        case UPDATE_FILTER_ACTION:
            if(!(typeof action.paylod === "boolean") || action.payload === "")
            {
                return action.payload
            }
            return state

        default:
            return state
    }
    
}