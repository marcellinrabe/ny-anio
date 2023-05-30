import { connect } from "react-redux"
import PropTypes from "prop-types"
import { todosSortedByTimeSelector } from "../store/todos/todoSelectors"
import TodoItem from "./TodoItem"
import TodoFilters from "./TodoFilters"
import FormWithStore from "./Form"
import BreakLine from "./BreakLine"

function TodoList({todos}) {
    const todoList = todos.length === 0 ? null : todos
    
    return  <div className="flex flex-col h-screen bg-white dark:bg-slate-800 sm:h-fit dark:text-white shadow-2xl sm:rounded-xl sm:pb-2 transition-none">
        <div>
            <FormWithStore/>
            <BreakLine/>
            <TodoFilters todosLength={todos.length}/>
        </div>
        <div className="flex-1 overflow-y-auto">
        <div className="p-4 sm:h-64 overflow-auto todo--container">
            <div className="px-2 mx-auto my-2 h-full">
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

        </div>
    </div>
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
