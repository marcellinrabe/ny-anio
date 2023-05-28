import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../store/filter/filterActions"
import { filterSelector } from "../store/filter/filterSelectors"
import { lengthTodosFilteredSelector } from "../store/todos/todoSelectors"

const NON_FILTER = {value: "", label: "tous"}
const COMPLETED_FILTER = {value: true, label:"completées"}
const WAITING_FILTER = {value: false, label:"en attente"}

const filters = [NON_FILTER, COMPLETED_FILTER, WAITING_FILTER]

function FilterButton({filter}) {
  const filterState = useSelector(filterSelector)
  const todosLength = useSelector(
    ({todos}) => lengthTodosFilteredSelector({todos, filter:filter.value})
  )
  const dispatch = useDispatch()

  const setFilter = () => {
    dispatch(updateFilter(filter.value))
  }

  return (<button onClick={setFilter} className={` py-2 mx-2 ${ filter.value === filterState ? "border-b-2 border-blue-500" : ""}`}>
    <span className="mx-1">{filter.label}</span>
    <span className={`${todosLength > 0 ? "inline":"hidden"} bg-gray-200 dark:bg-gray-950 py-1 px-2 rounded-full mx-1`}>{todosLength}</span>
    </button>)
}

FilterButton.propTypes = {
  filter: PropTypes.object || PropTypes.bool
}

export default function TodoFilters({todosLength}) {
  return (
    <div className="flex">
      {filters.map((filter, index) => <FilterButton key={"filter"+index} todosLength={todosLength} filter={filter} active={index === 0} /> )}
    </div>
  )
}

TodoFilters.propTypes = {
  todosLength: PropTypes.number
}
