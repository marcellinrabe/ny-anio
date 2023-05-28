import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai"
import { MdCodeOff, MdCode, MdCheck } from "react-icons/md"
import { deleteTodoAction, toggleTodoStateAction, updateTodoAction } from "../store/todos/todoActions"
import { useState } from "react"

export default function TodoItem({todo}) {
    const labelInput = useRef(null)

    const [readOnly, setReadOnly] = useState(true)
    const dispatch = useDispatch()

    const toggleCheck = () => {
        dispatch(toggleTodoStateAction(todo.id))
    }

    const deleteTodo = () => {
        dispatch(deleteTodoAction(todo.id))
    }

    const updateTodo = (event) => {
        if(labelInput.current.value.trim() !== "" && event.key === "Enter")
        {
            dispatch(updateTodoAction(todo.id, labelInput.current.value))
            setReadOnly(true)
        }
    }

    useEffect(() => {
        if(!readOnly)
        {
            labelInput.current.focus()
        }

    }, [readOnly])

  return (
    <li className="h-20 flex items-center border-2 rounded-md border-blue-400 dark:border-gray-950 bg-gray-50 dark:bg-gray-900 p-2 my-1">
        <div className="flex w-full h-full">
            <div className="flex-none min-w-max w-1/6">
                <div className="flex h-full w-full justify-center items-center">
                    <div className="text-center">
                        <button onClick={toggleCheck}><MdCheck size={18} className={`${todo.completed ? "text-white bg-blue-500 dark:text-black dark:hover:bg-gray-900 dark:bg-green-500 hover:text-black hover:bg-white dark:hover:text-white" : "hover:text-white hover:bg-blue-500 dark:hover:text-black dark:hover:bg-green-500"} transition duration-300 delay-100 rounded-full`} /></button>
                    </div>
                </div>
            </div>
           
            <div className="flex-auto flex items-center">
                <input ref={labelInput} type="text" defaultValue={todo.label} className="font-bold outline-none p-2 bg-gray-50 dark:bg-gray-950 focus:bg-gray-200 rounded-md w-full disabled:bg-gray-50 dark:disabled:bg-gray-900" disabled={readOnly} onKeyDownCapture={updateTodo}/>
            </div>
            <div className="flex-none min-w-max w-1/6">
            <div className="h-full">
                <div className="grid h-full w-full">
                <div className="self-start text-xs text-center text-gray-500 font-bold">{`${todo.time.hour}h${todo.time.minute}min`}</div>
                    <div className="flex gap-1 justify-center self-end">
                        <button onClick={() => setReadOnly(!readOnly)}>{readOnly ? <MdCodeOff size={18} /> : <MdCode size={18} />}</button>
                        <button onClick={deleteTodo}><AiOutlineDelete size={18} /></button>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
    </li>
    
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object
}
