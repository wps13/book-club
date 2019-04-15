/* eslint-disable no-underscore-dangle */
import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import "./App.css";
import Routes from "./routes";

import reducers from "./store/reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
