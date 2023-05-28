import { connect } from "react-redux"
import PropTypes from "prop-types"
import { todosSortedByTimeSelector } from "../store/todos/todoSelectors"
import TodoItem from "./TodoItem"
import TodoFilters from "./TodoFilters"

function TodoList({todos}) {
    const todoList = todos.length === 0 ? null : todos
    
    return <>
          <TodoFilters todosLength={todos.length}/>
          <div className="p-4 sm:h-64 sm:overflow-auto">
          <div className="px-2 mx-auto my-2">
          {
            todoList ? (
                <ul> 
                    {todoList.map(todo => <TodoItem key={todo.id} todo={todo}/>)}   
                </ul>
            ) : (
                <div className="h-full flex justify-center items-center">
                    <span>vide</span>
                </div>
            )
          }
          </div>

          </div>
          
    </>
}

TodoList.propTypes = {
    todos: PropTypes.array,
    filters: PropTypes.array
}


export const ListTodoWithStore = connect(
    (state) => ({
        todos: todosSortedByTimeSelector(state),
    })
)(TodoList)
