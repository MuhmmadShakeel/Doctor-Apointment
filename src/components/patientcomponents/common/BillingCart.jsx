import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/features/billing/BillingSlice.js";

function BillingCart() {
  const dispatch = useDispatch();

  const { items, subtotal, tax, grandTotal } = useSelector(
    (state) => state.billing
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-8">
        Billing Summary
      </h1>

      {items.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Order Details
            </h2>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      Type: {item.type}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: Rs. {item.price}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <p className="font-bold text-gray-800">
                      Rs. {item.total}
                    </p>

                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Payment Summary
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>Rs. {tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg text-gray-900">
                <span>Grand Total</span>
                <span>Rs. {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Proceed to Checkout
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-3 w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BillingCart;