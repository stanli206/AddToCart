import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState("");
  // const [message, setMessage] = useState(""); 

  //fetch api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add to Cart and filter duplicates
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setMessage("❌ Item already added to the cart!");
     } else {
       setCart([...cart, product]);
    //   // setMessage("Item added to the cart!");
     }

    
    setTimeout(() => setMessage(""), 3000);
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="relative">
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

      {/* Success/Error Message */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white py-2 px-4 rounded-lg">
          {message}
        </div>
      )}

      <div className="p-6 pt-20">
        <h1 className="text-3xl font-bold text-center mb-6">
          {/* Product Categories */}
        </h1>
        <Categories
          title="Men's Clothing"
          products={products.filter((p) => p.category === "men's clothing")}
          addToCart={addToCart}
        />
        <Categories
          title="Women's Clothing"
          products={products.filter((p) => p.category === "women's clothing")}
          addToCart={addToCart}
        />
        <Categories
          title="Jewelry"
          products={products.filter((p) => p.category === "jewelery")}
          addToCart={addToCart}
        />
        <Categories
          title="Electronics"
          products={products.filter((p) => p.category === "electronics")}
          addToCart={addToCart}
        />
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-[80vh]  overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-green-600 font-bold">&#8377;{item.price}</p>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
            <button
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 w-full"
              onClick={() => setIsCartOpen(false)}
            >
              Close Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
