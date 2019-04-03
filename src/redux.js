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

export const editTask = (id, value) => ({
  type: 'EDIT_TASK',
  id,
  value                       // <-- action.type
});

export const deleteTask = (value) => ({
  type: 'DELETE_TASK',
  value                        // <-- action.type
});

export const updateStatus = (value) => ({
  type: 'UPDATE_STATUS',
  value                        // <-- action.type
});


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

    case 'DELETE_TASK':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- DELETE_TASK | state: ", state)
      console.log(" -- REDUCER -- DELETE_TASK | action", action)
      console.log(" -- REDUCER -- DELETE_TASK | action.value: ", action.value)
      let idx = state.tasks.findIndex((element) => { return element.id === action.value });
      if (state.tasks.length === 1) {

        return { ...state, tasks: [] }

      } else {

        return { ...state, tasks: [...state.tasks.slice(0, idx), ...state.tasks.slice(idx + 1)] }

      }

    case 'UPDATE_STATUS':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_STATUS | state: ", state)
      console.log(" -- REDUCER -- UPDATE_STATUS | action", action)
      let idx2 = state.tasks.findIndex((element) => { return element.id === action.value });
      // console.log(idx);
      let newStatus = !state.tasks[idx2].active;
      if (idx2 === 0) {
        return { ...state, tasks: [Object.assign({}, state.tasks[idx2], { active: newStatus }), ...state.tasks.slice(idx2 + 1)] }
      } else {
        return {
          ...state, tasks: [...state.tasks.slice(0, idx2),
          Object.assign({}, state.tasks[idx2], { active: newStatus })
            , ...state.tasks.slice(idx2 + 1)]
        }
      }

    case 'EDIT_TASK':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_TASK | state: ", state)
      console.log(" -- REDUCER -- UPDATE_TASK | action", action)
      let idx3 = state.tasks.findIndex((element) => { return element.id === action.id });
      // console.log(idx);
      if (idx3 === 0) {
        return {
          ...state,
          tasks: [Object.assign({}, state.tasks[idx3], { text: action.value }), ...state.tasks.slice(idx3 + 1)],
        }
      } else {
        return {
          ...state,
          tasks: [...state.tasks.slice(0, idx3),
          Object.assign({}, state.tasks[idx3], { text: action.value })
            , ...state.tasks.slice(idx3 + 1)],
        };
      }

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
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  console.log(store);
  return store;
};


export const store = configureStore();
