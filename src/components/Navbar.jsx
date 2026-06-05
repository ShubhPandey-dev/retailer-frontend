import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleSearch(event) {
    const search = event.target.value.trim();

    if (event.key === "Enter" && search) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search products, orders, customers"
            onKeyDown={handleSearch}
            className="w-full rounded-lg border border-slate-200 pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="h-10 w-10 rounded-full border border-slate-200 grid place-items-center text-slate-600">
            <FiBell />
          </button>

          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center text-sm font-semibold">R</div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Retailer</p>
              <p className="text-xs text-slate-500">Store Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
