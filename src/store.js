import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import rotateReducer from "reducers/rotateReducer";

export const history = createHistory({ basename: '' });
const reduxRouterMiddleware = routerMiddleware(history);

function configureStore(state = { tasks: [] }) {

  // let composed = compose(
  //   applyMiddleware(reduxRouterMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )


  return createStore(connectRouter(history)(combineReducers({
    //reducers go here
    rotateReducer,
  })
  ),
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default configureStore;