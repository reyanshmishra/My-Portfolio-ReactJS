import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { applyMiddleware } from 'redux'
// import { createStore, applyMiddleware, compose } from 'redux'

// const store = createStore(rootReducer, compose(composeEnhancers))

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
