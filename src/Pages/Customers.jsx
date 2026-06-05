import React from "react";
import { customers } from "../data";

function Customers() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">Customers</h2>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="text-left px-4 py-3">Customer ID</th>
            <th className="text-left px-4 py-3">Name</th>
            <th className="text-left px-4 py-3">Phone</th>
            <th className="text-left px-4 py-3">City</th>
            <th className="text-left px-4 py-3">Orders</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr key={item.id} className="border-t border-slate-100">
              <td className="px-4 py-3">{item.id}</td>
              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3">{item.phone}</td>
              <td className="px-4 py-3">{item.city}</td>
              <td className="px-4 py-3">{item.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
