import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { minus, plus } from "./actions/index";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.changeNo);
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/about/:name/:lname" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
