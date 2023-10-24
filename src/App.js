import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import ContactPage from "./Pages/ContactPage";
import CustomerPage from "./Pages/CustomerPage";
import OrderPage from "./Pages/OrderPage";

function App() {
  return (
    <>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/customer"}>Customers</Link>
        </li>
        <li>
          <Link to={"/orders"}>Orders</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/customer" element={<CustomerPage></CustomerPage>}></Route>
        <Route path="/orders" element={<OrderPage></OrderPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <p>Site Footer</p>
    </>
  );
}

export default App;
