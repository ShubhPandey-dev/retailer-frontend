import React from "react";
import { payments } from "../data";

function Payments() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">Payments</h2>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="text-left px-4 py-3">Transaction</th>
            <th className="text-left px-4 py-3">Mode</th>
            <th className="text-left px-4 py-3">Amount</th>
            <th className="text-left px-4 py-3">Status</th>
            <th className="text-left px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((item) => (
            <tr key={item.id} className="border-t border-slate-100">
              <td className="px-4 py-3">{item.id}</td>
              <td className="px-4 py-3">{item.mode}</td>
              <td className="px-4 py-3 font-medium">{item.amount}</td>
              <td className="px-4 py-3">{item.status}</td>
              <td className="px-4 py-3">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;
