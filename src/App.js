import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { minus, plus } from "./actions";

function App() {
  const myState = useSelector((state) => state.initialno);
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(plus())}>plus</button>
      <p>{myState}</p>
      <button onClick={() => dispatch(minus())}>minus</button>
      {user.map((e, i) => {
        return (
          <div>
            <p key={i}>
              <b>name = </b>
              {e.name}
            </p>
            <p>
              <b>age = </b>
              {e.age}
            </p>
            <p>
              <b>email = </b>
              {e.email}
            </p>
            <p>======================</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
