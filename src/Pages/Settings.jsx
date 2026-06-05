import React from "react";

function Settings() {
  return (
    <div className="max-w-2xl rounded-xl bg-white border border-slate-200 p-6">
      <h2 className="text-2xl font-bold text-slate-900">Store Settings</h2>
      <p className="text-sm text-slate-500 mt-1">Static form for retailer profile settings.</p>

      <form className="mt-5 space-y-4">
        <div>
          <label className="text-sm text-slate-600">Store Name</label>
          <input defaultValue="Shubh Mart" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-slate-600">Owner Name</label>
          <input defaultValue="Shubham" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-slate-600">Contact Number</label>
          <input defaultValue="+91 9000000000" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>

        <button type="button" className="rounded-lg bg-blue-600 text-white px-5 py-2 hover:bg-blue-700">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;
