import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import { Provider, useStore } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const homeVisibility  = (state=false, action) => {
  switch(action.type) {
    case "HOME":
      return action.visibility
    default:
      return state
  }
}

const projectOneVisibility  = (state=false, action) => {
  switch(action.type) {
    case "PROJECT_ONE":
      return action.visibility
    default:
      return state
  }
}

const projectTwoVisibility  = (state=false, action) => {
  switch(action.type) {
    case "PROJECT_TWO":
      return action.visibility
    default:
      return state
  }
}

const projectThreeVisibility  = (state=false, action) => {
  switch(action.type) {
    case "PROJECT_THREE":
      return action.visibility
    default:
      return state
  }
}

const aboutVisibility  = (state=false, action) => {
  switch(action.type) {
    case "ABOUT":
      return action.visibility
    default:
      return state
  }
}

const contactVisibility  = (state=false, action) => {
  switch(action.type) {
    case "CONTACT":
      return action.visibility
    default:
      return state
  }
}


const videoOneStatus = (state=false, action) => {
  switch(action.type) {
    case "PROJECTONEVIDEO":
      return !state
    default:
      return state
    }
}
const videoTwoStatus = (state=false, action) => {
  switch(action.type) {
    case "PROJECTTWOVIDEO":
      return !state
    default:
      return state
    }
}
const videoThreeStatus = (state=false, action) => {
  switch(action.type) {
    case "PROJECTTHREEVIDEO":
      return !state
    default:
      return state
    }
}

const chatBoxStatus = (state=true, action) => {
  switch(action.type) {
    case "CHATBOXACTIVE":
      return !state
    default:
      return state
    }
}

const videoPopUp = (state=false, action) => {
  switch(action.type) {
    case "VISIBLE":
      return !state
    default:
      return state
    }
}




const allReducers = combineReducers({
  homeVisibility: homeVisibility,
  projectOneVisibility: projectOneVisibility,
  projectTwoVisibility: projectTwoVisibility,
  projectThreeVisibility: projectThreeVisibility,
  aboutVisibility: aboutVisibility,
  contactVisibility: contactVisibility,
  videoOneStatus: videoOneStatus,
  videoTwoStatus: videoTwoStatus,
  videoThreeStatus: videoThreeStatus,
  chatBoxStatus: chatBoxStatus,
  videoPopUp: videoPopUp
})

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(useStore)
console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
