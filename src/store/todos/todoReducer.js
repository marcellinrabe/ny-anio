const storedStateJSON = localStorage.getItem('mr__todo-list');
const storedState = JSON.parse(storedStateJSON)

let id = storedStateJSON ? storedState.todos.length : 1


const initialState = storedStateJSON ? storedState.todos : []

export const ADD_TODO = "todos/add"
export const TOGGLE_TODO = "todos/toggle"
export const DELETE_TODO = "todos/delete"
export const UPDATE_TODO = "todos/update"
export const RESET_TODO = "todos/reset"

const setDate = () => {
    const date = new Date();
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        format: date.getTime()
    }
} 


export function todoReducer(state=initialState, action)
{
    switch(action.type)
    {
        case RESET_TODO:
            return []

        case ADD_TODO:
            return [
                ...state, 
                {
                    id : id++,
                    label : action.payload,
                    completed : false,
                    time: setDate()
                }
            ]

        case TOGGLE_TODO:
            return state.map(todo => {
                if(action.payload === todo.id)
                {
                    return {...todo, completed: !todo.completed}
                }
                else 
                {
                    return todo
                }
            })
        
        case DELETE_TODO:
            return state.filter(todo => (todo.id !== action.payload))
        
        case UPDATE_TODO:
            return state.map(todo => {
                if(action.payload.id === todo.id)
                {
                    return { 
                        ...todo, 
                        label: action.payload.newLabel,
                    }
                }
                else
                {
                    return todo
                }
            })

        default:

            return state
    }
}