import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(item.quantity + amount, item.stock)) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500">Go shopping</Link></p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-5 py-5 bg-gray-300 rounded">-</button>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-5 py-5 bg-gray-300 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="px-2 py-1  text-white rounded">
                  <DeleteButton/>
                    </button>
                    
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
