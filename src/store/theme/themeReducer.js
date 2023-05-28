if(!localStorage.getItem("mr__todo-list-theme"))
{
    localStorage.setItem("mr__todo-list-theme", "light")
}

const initialState = localStorage.getItem("mr__todo-list-theme")

export const SWITCH_THEME_ACTION = "theme/switch"

export const themeReducer = (state=initialState, action) =>
{
    switch(action.type)
    {
        case SWITCH_THEME_ACTION:

            if(state === "light")
            {
                localStorage.setItem("mr__todo-list-theme", "dark")
                return "dark"
            }
            else 
            {
                localStorage.setItem("mr__todo-list-theme", "light")
                return "light"
            } 
            
        default:
            return state
    }
}