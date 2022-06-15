import React from "react";
import { Provider } from "react-redux";
import { Catalog } from "./components/Catalog";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Catalog />
      </Provider>
    </div>
  );
}

export default App;
