import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container max-w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
