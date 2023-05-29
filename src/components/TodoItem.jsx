import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai"
import { MdCodeOff, MdCode, MdCheck } from "react-icons/md"
import { BiCheckbox } from "react-icons/bi"
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
    <li className="border shadow-md border-b-2 rounded-md border-b-blue-400 dark:border-gray-950 bg-gray-50 dark:bg-gray-900 p-2 my-1">
        <div className=" flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
            <button onClick={toggleCheck}>
                    {
                        todo.completed ? (
                            <MdCheck size={18} />
                        ):(
                            <BiCheckbox size={18} />
                        )
                    }
            </button>
            <div className="flex-auto flex items-center w-full">
                <input ref={labelInput} 
                    type="text" 
                    defaultValue={todo.label} 
                    className="w-full outline-none p-2 bg-gray-50 dark:bg-gray-950 focus:bg-gray-200 rounded-md disabled:bg-gray-50 dark:disabled:bg-gray-900" 
                    disabled={readOnly} 
                    onKeyDownCapture={updateTodo}
                />
            </div>
        </div>
        <div className="flex justify-end">
            {/* <div className="text-gray-500 font-bold">
                {`${todo.time.hour.toString().padStart(2, '0')}h
                ${todo.time.minute.toString().padStart(2, '0')}min`
                }
            </div> */}
            <div className="flex gap-1 justify-center">
                <button onClick={() => setReadOnly(!readOnly)}>{readOnly ? <MdCodeOff size={18} /> : <MdCode size={18} />}</button>
                <button onClick={deleteTodo}><AiOutlineDelete size={18} /></button>
            </div>
        </div>

        </div>
        
    </li>
    
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object
}
