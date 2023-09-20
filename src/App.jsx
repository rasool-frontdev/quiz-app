import Main from "./components/Main";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>count</p>
        <p>quest</p>
      </Main>
    </div>
  );
}

export default App;
