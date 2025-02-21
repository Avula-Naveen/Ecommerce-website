
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartProvider from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Footer from './components/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ gender: "", color: "" });

  return (
    <CartProvider>
      <Router>
        <Navbar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          filters={filters} 
          setFilters={setFilters} 
        />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} filters={filters} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
};

export default App;



