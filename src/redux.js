import {
  // combineReducers,
  createStore,
} from 'redux';


//ACTIONS
export const addTask = () => ({
  type: 'ADD_TASK',                        // <-- action.type
});

export const editTask = () => ({
  type: 'EDIT_TASK',                        // <-- action.type
});

export const deleteTask = () => ({
  type: 'DELETE_TASK',                        // <-- action.type
});

export const getTasks = () => ({
  type: 'GET_TASKS',                        // <-- action.type
});



///REDUCERS
export const reducers = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_TASKS':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- RETRIEVE_TASKS | state: ", state)
      console.log(" -- REDUCER -- RETRIEVE_TASKS | action", action)
      return state.tasks;

    default:
      return state;
  }
}


// Initial State
// Minimal representation of the data in the app
let id = 4;
const initialState = {
  tasks: [
    { id: 1, title: 'first task', completed: false },
    { id: 2, title: 'second task', completed: true },
    { id: 3, title: 'third task', completed: true },
    { id: 4, title: 'fourth task', completed: false },
  ],
  newTaskValue: "",
};


// COMBINE ALL REDUCERS INTO 1 OBJECT
// export const reducers = combineReducers({
//     tasks
// });


// STORE -- store.js
export function configureStore(initialState = initialState) { // initialState = initialState | {}
  const store = createStore(reducers, initialState);
  return store;
};



export const store = configureStore();
