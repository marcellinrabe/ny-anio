import { createSelector } from "reselect"

export const todosFilteredSelector = ({todos, filter=null}) => {
    if(filter === "")
    {
        return todos
    }

    return todos.filter(todo => todo.completed === filter)
}

export const todosSortedByTimeSelector = createSelector(todosFilteredSelector, (todos) => {
    return [...todos].sort((a, b) => a.time.format - b.time.format)
})

export const lengthTodosFilteredSelector = ({todos, filter=null}) => {
    const response = todosFilteredSelector({todos, filter}).length
    return response
}

export const existingTodoSelector = ({todos, label}) => {
    if(!label) 
    return null

    
    return todos.filter(todoRecorded => todoRecorded.label === label)
}