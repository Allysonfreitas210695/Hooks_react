import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  user: null,
  number: 0,
};

function reduce(state, action) {
  switch (action.type) {
    case "add2": {
      return { ...state, number: state.number + 2 };
    }
    case "login": {
      return { ...state, user: { name: action.payload } };
    }
    case "mult7": {
      return { ...state, number: state.number * 7 };
    }
    case "div25": {
      return { ...state, number: state.number / 25 };
    }
    case "numberInteiro": {
      let n = parseInt(state.number);
      return { ...state, number: n };
    }
    case "somaValue": {
      return { ...state, number: state.number + action.numero };
    }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">{"Sem usuario"}</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "allyson" })}
          >
            Login
          </button>

          <button className="btn" onClick={() => dispatch({ type: "add2" })}>
            +2
          </button>

          <button className="btn" onClick={() => dispatch({ type: "mult7" })}>
            *7
          </button>

          <button className="btn" onClick={() => dispatch({ type: "div25" })}>
            /25
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "numberInteiro" })}
          >
            Int
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "somaValue", numero: 20 })}
          >
            soma N!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
