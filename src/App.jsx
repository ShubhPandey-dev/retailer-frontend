import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";
import Orders from "./Pages/Orders";
import Payments from "./Pages/Payments";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import RetailerLogin from "./Pages/RetailerLogin";
import Settings from "./Pages/Settings";

const ProtectedLayout = ({ children }) => {
  const token = localStorage.getItem("retailer_token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      {isSidebarOpen ? (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-slate-950/45 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main data-shell-scroll className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};

function App() {
  const token = localStorage.getItem("retailer_token");

  return (
    <Routes>
      <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} replace />} />
      <Route path="/login" element={<RetailerLogin />} />

      <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      <Route path="/products" element={<ProtectedLayout><Products /></ProtectedLayout>} />
      <Route path="/orders" element={<ProtectedLayout><Orders /></ProtectedLayout>} />
      <Route path="/customers" element={<ProtectedLayout><Customers /></ProtectedLayout>} />
      <Route path="/payments" element={<ProtectedLayout><Payments /></ProtectedLayout>} />
      <Route path="/reports" element={<ProtectedLayout><Reports /></ProtectedLayout>} />
      <Route path="/settings" element={<ProtectedLayout><Settings /></ProtectedLayout>} />
      <Route path="/logout" element={<ProtectedLayout><Logout /></ProtectedLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
