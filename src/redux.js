import {
  // combineReducers,
  createStore,
} from 'redux';


//ACTIONS
export const addTask = () => ({
  type: 'ADD_TASK',                        // <-- action.type
});

export const updateNewTaskValue = (value) => ({
  type: 'UPDATE_NEW_TASK_VALUE',
  value
});

// export const updateTask = () => ({
//   type: 'UPDATE_TASK',                        // <-- action.type
// });

// export const deleteTask = () => ({
//   type: 'DELETE_TASK',                        // <-- action.type
// });


///REDUCERS
export const reducers = (state = initialState1, action) => {
  switch (action.type) {

    case 'ADD_TASK':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- ADD_TASKS | state: ", state)
      console.log(" -- REDUCER -- ADD_TASK | action", action)
      id++;
      return Object.assign(
        {},
        state,
        {
          tasks: [
            ...state.tasks,
            { id, text: state.newTaskValue, active: false }
          ],
          newTaskValue: ""
        }
      );

    case 'UPDATE_NEW_TASK_VALUE':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | state: ", state)
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | action: ", action)
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | action.type: ", action.type)
      console.log(" -- REDUCER -- UPDATE_NEW_TASK_VALUE | action.value: ", action.value)
      return Object.assign(
        {},
        state,
        { newTaskValue: action.value }
      );

    // case 'DELETE_TASK':
    //   console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
    //   console.log(" -- REDUCER -- DELETE_TASK | state: ", state)
    //   console.log(" -- REDUCER -- DELETE_TASK | action", action)
    //   let deleteIndex = state.tasks.findIndex(obj => obj['id'] === action.id);
    //   return {
    //     ...state,
    //     tasks: [
    //       ...state.tasks.slice(0, deleteIndex),
    //       ...state.tasks.slice(deleteIndex + 1),
    //     ]
    //   }

    // case 'UPDATE_TASK':
    //   console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
    //   console.log(" -- REDUCER -- UPDATE_TASK | state: ", state)
    //   console.log(" -- REDUCER -- UPDATE_TASK | action", action)
    //   let deleteIndex = state.tasks.findIndex(obj => obj['id'] === action.id);
    //   return {
    //     ...state,
    //     tasks: [
    //       ...state.tasks.slice(0, deleteIndex),
    //       ...state.tasks.slice(deleteIndex + 1),
    //     ]
    //   }

    default:
      return state;
  }
}


// Initial State
// Minimal representation of the data in the app
let id = 3;
const initialState1 = {
  tasks: [
    { id: 0, text: 'first task', active: false },
    { id: 1, text: 'second task', active: true },
    { id: 2, text: 'third task', active: true },
    { id: 3, text: 'fourth task', active: false },
  ],
  newTaskValue: "",
};


// COMBINE ALL REDUCERS INTO 1 OBJECT
// export const reducers = combineReducers({
//     tasks
// });


// STORE -- store.js
export function configureStore(initialState = initialState1) { // initialState = initialState | {}
  const store = createStore(reducers, initialState);
  console.log(store);
  return store;
};


export const store = configureStore();
