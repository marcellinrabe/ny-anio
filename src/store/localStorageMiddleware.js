

export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
  
    localStorage.setItem(
        'mr__todo-list', 
        JSON.stringify(state)
    );
  
    return result;
  };
  
