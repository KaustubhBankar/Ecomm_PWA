import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('/service-worker.js')
  .then(registration => {
  console.log('Service Worker registered with scope:', registration.scope);
  })
  .catch(error => {
  console.error('Service Worker registration failed:', error);
  });
  });
  }

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
