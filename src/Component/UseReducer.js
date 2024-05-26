import React, { useReducer } from "react";

const initialState = {
  firstState : 0,
  SecondState : 0
};

const reducer = (state, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "increment":
      return {firstState: state.firstState + action.value};
      break;
    case "decrement":
      return state -1
      break;
    case "reset":
      return initialState;
    default:
      return state;
      break;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>state 1- {state.firstState}</div>

      <div>state 2- {state.SecondState}</div>
      <button onClick={() => dispatch({type: "increment", value: 5})}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
};

export default UseReducer;
