import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup.js";
import { CartProvider } from "./components/ContentReducer.js";
import MyOrder from "./screens/MyOrder";

// link  has been removed fromhere

function App() {
  return (
    //only one div tag allowed in return
    <CartProvider>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
