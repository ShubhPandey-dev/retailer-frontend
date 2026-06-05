import React from "react";
import { dashboardStats } from "../data";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Retailer Dashboard</h2>
        <p className="text-sm text-slate-500">Quick summary of your shop performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {dashboardStats.map((card) => (
          <div key={card.label} className={`rounded-xl text-white p-4 ${card.tone}`}>
            <p className="text-sm opacity-90">{card.label}</p>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">Recent Orders</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3">Order</th>
              <th className="text-left px-4 py-3">Customer</th>
              <th className="text-left px-4 py-3">Amount</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          {/* <tbody>
            {orders.slice(0, 3).map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3 font-medium">{order.amount}</td>
                <td className="px-4 py-3">{order.status}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
