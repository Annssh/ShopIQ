import "./index.css";
import { Footer, Navbar } from "../controller";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
