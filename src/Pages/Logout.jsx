import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("retailer_token");
    const timer = setTimeout(() => navigate("/login", { replace: true }), 700);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="rounded-xl bg-white border border-slate-200 p-8 text-center">
      <h2 className="text-xl font-semibold text-slate-900">Logging out...</h2>
      <p className="text-sm text-slate-500 mt-2">You are being redirected to login.</p>
    </div>
  );
}

export default Logout;
