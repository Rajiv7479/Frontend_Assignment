import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  // const handleRemoveFromCart = () => {
  //   dispatch(removeItem(product));
  // };

  return (
    <div className="max-w-sm max-h-max rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={product.image_url}
        alt={product.product_name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.product_name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold">${product.price}</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category}
        </span>
        {/* <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
          {product.stock} in stock
        </span> */}
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
        {/* <button
          onClick={handleRemoveFromCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove from Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
