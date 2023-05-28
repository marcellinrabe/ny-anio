import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./localStorageMiddleware";
import { todoReducer } from "./todos/todoReducer";
import { filterReducer } from "./filter/filterReducer";
import { errorReducer } from "./error/errorReducer";
import { themeReducer } from "./theme/themeReducer";

const store = configureStore({
    reducer: combineReducers({
        todos: todoReducer,
        filter: filterReducer,
        error: errorReducer,
        theme: themeReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
    devTools: import.meta.env.NODE_ENV !== 'production',
})

export default store