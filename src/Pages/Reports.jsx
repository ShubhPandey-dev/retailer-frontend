import React from "react";
import Products from "./Products";

function Reports() {
  const totalProducts = products.length;
  const outOfStock = products.filter((item) => item.stock === 0).length;
  const lowStock = products.filter((item) => item.stock > 0 && item.stock < 10).length;

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-slate-900">Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white border border-slate-200 p-4">
          <p className="text-sm text-slate-500">Total Products</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{totalProducts}</p>
        </div>
        <div className="rounded-xl bg-white border border-slate-200 p-4">
          <p className="text-sm text-slate-500">Low Stock</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{lowStock}</p>
        </div>
        <div className="rounded-xl bg-white border border-slate-200 p-4">
          <p className="text-sm text-slate-500">Out of Stock</p>
          <p className="text-2xl font-bold text-rose-600 mt-1">{outOfStock}</p>
        </div>
      </div>

      <div className="rounded-xl bg-white border border-slate-200 p-4">
        <h3 className="font-semibold text-slate-800">Top Selling Products (Static)</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc ml-5">
          <li>Basmati Rice 5kg</li>
          <li>Sunflower Oil 1L</li>
          <li>Herbal Shampoo</li>
        </ul>
      </div>
    </div>
  );
}

export default Reports;
