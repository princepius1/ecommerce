import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
