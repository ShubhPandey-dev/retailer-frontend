import React from "react";
import { NavLink } from "react-router-dom";
import { FiBox, FiCreditCard, FiFileText, FiHome, FiLogOut, FiSettings, FiShoppingBag, FiUsers } from "react-icons/fi";

const menu = [
  { label: "Dashboard", path: "/dashboard", icon: FiHome },
  { label: "Products", path: "/products", icon: FiBox },
  { label: "Orders", path: "/orders", icon: FiShoppingBag },
  { label: "Customers", path: "/customers", icon: FiUsers },
  { label: "Payments", path: "/payments", icon: FiCreditCard },
  { label: "Reports", path: "/reports", icon: FiFileText },
  { label: "Settings", path: "/settings", icon: FiSettings },
  { label: "Logout", path: "/logout", icon: FiLogOut },
];

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 h-screen bg-slate-900 text-slate-100 p-4">
      <div className="mb-6 px-2 py-3 border-b border-slate-700">
        <p className="text-xs uppercase text-slate-400">Retail Panel</p>
        <h1 className="text-lg font-bold">Shubh Mart</h1>
      </div>

      <nav className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  isActive ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-slate-800"
                }`
              }
            >
              <Icon />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
