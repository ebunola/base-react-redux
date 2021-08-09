import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const count = useSelector((state) => state.count);
  console.log(count);

  const dispatch = useDispatch();

  const { rsvpYes, rsvpNo } = bindActionCreators(actionCreators, dispatch);
  // console.log("AC" + AC );

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => rsvpYes(1)}>RSVP YES</button>
      <button onClick={() => rsvpNo(1)}>RSVP NO</button>
    </div>
  );
}

export default App;
