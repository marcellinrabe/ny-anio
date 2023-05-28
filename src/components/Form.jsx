import { useRef } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useSelector } from "react-redux"
import { MdDarkMode, MdLightMode, MdClear } from "react-icons/md"
import { createNewTodoAction } from "../store/todos/todoActions"
import { errorSelector } from "../store/error/errorSelectors"
import { todosSortedByTimeSelector } from "../store/todos/todoSelectors"
import { setErrorAction } from "../store/error/errorActions"
import { switchThemeAction } from "../store/theme/themeActions"
import { themeSelector } from "../store/theme/themeSelectors"


function Form({onSubmit, theme, onSwitchTheme, error, onError})
{
    const todos = useSelector(todosSortedByTimeSelector)
    const textAreaRef = useRef(null)

    const onKeyEnter = (event) => {
        if(event.key !== "Enter")
        {
            return false
        }
        createNewTodo(event)
    }

    const createNewTodo = (event) => {
        event.preventDefault()
        const label = textAreaRef
            .current
            .value
            .trim()

        if(!label.length > 0)
            return false

        if(!label.length < 4)
            onError("Ecris au moins 4 caractères")
        else if(todos.filter(todo => todo.label === label).length > 0) {
            onError("Cette tâche existe déjà")
        } else {
            onSubmit(label)
            clear()
        }
    }

    const checkError = () => {
        const exist = todos.filter(todo => todo.label === textAreaRef.current.value).length > 0
        if(!exist && error.isError)
            onError("")
        return false
    }

    const clear = () => {
        textAreaRef.current.value = ""
        onError("")
    }

    const switchTheme = () => {
        onSwitchTheme()
        textAreaRef.current.focus()
    }

    return <div className="py-2 mx-2">
        <form onSubmit={createNewTodo} onKeyDownCapture={onKeyEnter}>
            <div>
                <textarea 
                    ref={textAreaRef}
                    cols="10"
                    className="w-full outline-none p-1 dark:bg-slate-800"
                    placeholder="Une nouvelle tâche"
                    onChange={checkError}
                ></textarea>           
            </div>
            <div className="flex justif-between w-full gap-2">
                <div id="error-field" className={`flex-1 flex items-center`}>
                    <span className="italic text-red-500">
                        {error.isError ? error.errorText : ""} 
                    </span>
                </div>
                <div className="flex-none flex gap-2 justify-end items-center">
                    <button className="btn" onClick={switchTheme}>{theme === "light" ? <MdDarkMode size={18} className="text-gray-900" /> : <MdLightMode size={18} className="text-yellow-500" /> }</button>
                    <button className="btn text-gray-400 font-bold" onClick={clear}>
                        <div className="flex gap-2">
                            <MdClear size={18} />
                            <span className="">Effacer</span>
                        </div>  
                    </button>
                    <button className="btn btn--blue text-white font-bold" type="submit">Ajouter</button>
                </div>
            </div>
            
        </form>
    </div>
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    theme: PropTypes.string,
    onSwitchTheme: PropTypes.func,
    error: PropTypes.object,
    onError: PropTypes.func
}

const FormWithStore = connect(
    (state) => ({
        error: errorSelector(state),
        theme: themeSelector(state)
    }), 
    (dispatch) => ({
        onSubmit: (label) => dispatch(createNewTodoAction(label)),
        onError: (errorText) => dispatch(setErrorAction(errorText)),
        onSwitchTheme: () => dispatch(switchThemeAction())
    }))(Form)

export default FormWithStore