import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  const state = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state.count);
  }, [state]);

  const increment = () => dispatch({ type: "INCREASE" });
  const decrement = () => dispatch({ type: "DECREASE" });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <>
      <div className="card">
        <p>{state.count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
