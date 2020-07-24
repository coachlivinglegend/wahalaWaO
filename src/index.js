//of course, you import your normal react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//we use provider to pass our states and dispatch our actions to all the components in our app
//you import it from the react redux library
//well, if your app only has one component, I'm not sure you need provider, you can just pass the props directly with App
import { Provider } from 'react-redux';

//we use createstore to...create store
//we use combine reducers to combine reducers when we have more than one reducer
//midddleware is for third party apps like seeing the state at every instance or for async functions
import { createStore,  combineReducers, applyMiddleware } from 'redux';

//create logger is a type of middle, we use redux thunk middleware for async funct
import { createLogger } from 'redux-logger';
// import Trial from './Trial/trial.js'
// import { handleTheCount, sayMyName } from './Trial/reducers';

//this is where you umport your reducers from your reducer folder
import { setArray } from './reducers';

//instantiate the logger middleware
const logger = createLogger();

//this is how you combine all your reducers into a singular rootreducer
const rootReducer = combineReducers({ setArray })
// const rootReducer = combineReducers({ handleTheCount, sayMyName })

//you createSore with this function and bind it to a store variable which you will be passing around
//the function takes arguments like what we have below
const store = createStore(rootReducer, applyMiddleware(logger))

// const store = createStore(rootReducer)

// const store = createStore(rootReducer)


//speaks for itself
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
