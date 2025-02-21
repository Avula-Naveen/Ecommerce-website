import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartLogo from "./CartLogo";

const Navbar = ({ searchQuery, setSearchQuery, filters, setFilters }) => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-800 text-white ">
      
      <Link to="/" className="text-xl font-bold">E-Commerce</Link>

      
    <form className="px-4 w-full max-w-[330px]">
  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" htmlFor="default-search">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400">
        <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
      </svg>
    </div>
    <input required placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="block w-full p-2 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      id="default-search" 
      type="search" />
    <button className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4">
        <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </div>
</form>

      
      <select
        className="border rounded-lg p-2 text-black"
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">All Genders</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Unisex">Unisex</option>
      </select>

      <select
        className="border rounded-lg p-2 text-black"
        onChange={(e) => setFilters({ ...filters, color: e.target.value })}
      >
        <option value="">All Colors</option>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Brown">Brown</option>
        <option value="Yellow">Yellow</option>
        <option value="Pink">Pink</option>
        <option value="Maroon">Maroon</option>
      </select>

      
      <Link to="/cart" className="relative">
      <CartLogo />
       
      </Link>
    </nav>
  );
};

export default Navbar;
