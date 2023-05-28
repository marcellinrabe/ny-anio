import { ADD_TODO, DELETE_TODO, RESET_TODO, TOGGLE_TODO, UPDATE_TODO } from "./todoReducer";

export const resetTodosAction = () => ({
    type: RESET_TODO
})

export const createNewTodoAction = (label) => ({
    type: ADD_TODO,
    payload: label
})

export const toggleTodoStateAction = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const deleteTodoAction = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const updateTodoAction = (id, newLabel) => ({
    type: UPDATE_TODO,
    payload: {id: id, newLabel: newLabel}
})