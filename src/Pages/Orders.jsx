import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Orders() {
  let [orders , setOrders] = useState([]);

  async function getOrders(){
    let res = await fetch ('https://ecom-common-backend.onrender.com/orders/vieworders');
    let result = await res.json();
    setOrders(result);
  }

  useEffect(()=>{
    getOrders();
  },[])

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">Orders</h2>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="text-left px-4 py-3">Order ID</th>
            <th className="text-left px-4 py-3">customer</th>
            <th className="text-left px-4 py-3">Product</th>
            <th className="text-left px-4 py-3">Quantity</th>
            <th className="text-left px-4 py-3">Price</th>
            <th className="text-left px-4 py-3">TotalAmount</th>
            <th className="text-left px-4 py-3">Status</th>
            <th className="text-left px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.id} className="border-t border-slate-100">
              <td className="px-4 py-3 font-medium">{item.order_id}</td>
              <td className="px-4 py-3">{item.customername}</td>
              <td className="px-4 py-3">{item.product_name}</td>
              <td className="px-4 py-3">{item.quantity}</td>
              <td className="px-4 py-3">{item.price}</td>
              <td className="px-4 py-3">{item.total_amount}</td>
              <td className="px-4 py-3">{item.status}</td>
              <td className="px-4 py-3">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
