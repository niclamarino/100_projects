import "./styles/styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/storeConfiguration";
import './firebase/firebase';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Blog />
  </Provider>,
  document.getElementById("app")
);
