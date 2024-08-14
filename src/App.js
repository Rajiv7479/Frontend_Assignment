import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="container max-w-full">
      <Navbar />
      <div className="py-10 flex items-center justify-center">
        <h1 className="text-3xl font-bold underline">All Products</h1>
      </div>
      <Products />
    </div>
  );
}

export default App;
