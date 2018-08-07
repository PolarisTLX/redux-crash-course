import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; //this calls index.js if you don't specify which file

const initialState = {};

const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

// to use Chrome Redux Dev Tools:
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
