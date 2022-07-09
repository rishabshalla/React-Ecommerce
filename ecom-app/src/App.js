import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import { data } from "./components/Data";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Bill from "./components/Bill";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Bill /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/shop" element={<Category />} /> */}
          {/* <Route path="/favorites" element={<Category />} /> */}
          {/* <Route path="/orders" element={<Category />} /> */}
          {/* <Route path="/contact" element={<Category />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
