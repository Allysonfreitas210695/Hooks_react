import "./App.css";
import React, { useState } from "react";
import { BrowserRouter  } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../components/data/DataContent";

const App = (props) => {
  const [state, setState] = useState(data);

  return (
    <div className="App">
      <DataContext.Provider value={{state, setState}}>
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
};

export default App;
