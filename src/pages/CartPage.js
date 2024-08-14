import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, removeFromCart } from "../redux/cartSlice";
import Alert from "../components/Alert";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const discount = 0;

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (subtotal * discount) / 100;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="grid grid-cols-3 gap-20">
        <div className="grid grid-cols-1 col-span-2 gap-6">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.product_id}
                className="flex items-center justify-center p-4 bg-white shadow-md rounded"
              >
                <img
                  src={item.image_url}
                  alt={item.product_name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.product_name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="bg-gray-200 text-gray-700 p-2 rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="bg-gray-200 text-gray-700 p-2 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="ml-4 bg-red-500 text-white p-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <Alert type="info" message="Cart is empty ." />
          )}
        </div>
        <div className="grid grid-col-1 auto-rows-min mt-6 p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
          <p className="text-lg">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
          {/* {discount > 0 && <p className="text-lg">Discount: {discount}%</p>} */}
          <p className="text-lg font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
