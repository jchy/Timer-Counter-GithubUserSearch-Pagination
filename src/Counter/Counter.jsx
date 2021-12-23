import { useReducer } from "react";

const actions = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case actions.DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default: {
      return state;
    }
  }
};

function Counter({ start = 10 }) {
  const [state, dispatch] = useReducer(reducer, { counter: start });

  const handleChange = (type) => {
    const action = {
      type
    };
    dispatch(action);
  };
  return (
    <div style={{ padding: "20px", borderRadius: "10px" }}>
      <h1>Counter:</h1>
      <h3>{state.counter}</h3>
      <button
        style={{
          height: "35px",
          width: "120px",
          borderRadius: "5px",
          background: "teal",
          color: "white"
        }}
        onClick={() => handleChange(actions.INCREMENT_COUNTER)}
      >
        ADD
      </button>{" "}
      <button
        style={{
          height: "35px",
          width: "120px",
          borderRadius: "5px",
          background: "teal",
          color: "white"
        }}
        onClick={() => handleChange(actions.DECREMENT_COUNTER)}
      >
        REDUCE
      </button>
    </div>
  );
}

export default Counter;
