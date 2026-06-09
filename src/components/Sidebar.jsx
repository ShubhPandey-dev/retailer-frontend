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

function Sidebar({ isOpen = false, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 h-screen w-[min(84vw,280px)] shrink-0 bg-slate-900 p-4 text-slate-100 shadow-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:z-auto lg:w-64 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
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
              onClick={onClose}
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
