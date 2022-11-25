import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([{ path: "/", element: <Homepage /> }]);

function App() {
  return (
    <div className="">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
