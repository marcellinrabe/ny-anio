import { ListTodoWithStore } from "./TodoList"
import BreakLine from "./BreakLine"
import FormWithStore from "./Form"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { themeSelector } from "../store/theme/themeSelectors"
import { useEffect } from "react"
import { resetTodosAction } from "../store/todos/todoActions"


export default function App() {
  const theme = useSelector(themeSelector)
  const dispatch = useDispatch()


  useEffect(() => {

    const checkTime = () => {

      const currentTime = new Date();
      const remainingTime = new Date();
      remainingTime.setHours(23);
      remainingTime.setMinutes(59);
      remainingTime.setSeconds(59);

      if (currentTime >= remainingTime) 
      {
        localStorage.removeItem('mr__todo-list');
        dispatch(resetTodosAction())
      }  
    }      

    const timer = setInterval(checkTime, 1000);

    return () => clearInterval(timer);
  })

  return (
    <div className={theme}>
        <div className="w-screen h-screen overflow-hidden grid sm:flex sm:items-center sm:justify-center sm:bg-gray-200 dark:bg-slate-800 dark:sm:bg-gray-950 transition-all duration-200">
            <div className="w-full sm:h-fit sm:max-w-xl grid h-screen grid-rows-[80vh_20vh] sm:items-center">
                <div className="bg-white dark:bg-slate-800 sm:h-fit dark:text-white shadow-xl sm:rounded-xl transition-none">
                    <FormWithStore/>
                    <BreakLine/>
                    <ListTodoWithStore/>            
                </div>
                <Footer/>      
            </div>
        </div>
    </div>
      
      
  )
}
