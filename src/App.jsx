import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import TextForm from "./components/TextForm/TextForm";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar titel="TextUtils" route1="Home" route2="About" />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm Heading="Enter Text to analyze " />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
