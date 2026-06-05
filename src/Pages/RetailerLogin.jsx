import React from "react";
import { useNavigate } from "react-router-dom";

function RetailerLogin() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("retailer_token", "retailer-demo-token");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 grid place-items-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Retailer Login</h2>
        <p className="text-sm text-slate-500 mt-1">Static demo login for retailer module.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              required
              defaultValue="retailer@shop.com"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Password</label>
            <input
              type="password"
              required
              defaultValue="123456"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2 font-medium" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default RetailerLogin;
