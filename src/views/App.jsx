import "./App.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/DataContent";
import Store from "../data/store";

const App = (props) => {
  const [state, setState] = useState(data);

  return (
    <div className="App">
     <Store>
        <DataContext.Provider value={{ state, setState }}>
          <BrowserRouter>
            <Menu />
            <Content />
          </BrowserRouter>
        </DataContext.Provider>
      </Store>
    </div>
  );
};

export default App;
