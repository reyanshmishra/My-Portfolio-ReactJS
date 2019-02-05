import React from "react";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();

const store = () => {
  let middleWares = applyMiddleware(sagaMiddleware);
  const store = createStore(
    rootReducer,
    compose(
      // window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      middleWares
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
