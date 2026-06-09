import React, { useEffect, useState } from "react";
import { FiBell, FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const [isMobileChromeHidden, setIsMobileChromeHidden] = useState(false);

  useEffect(() => {
    const scrollTarget = document.querySelector("[data-shell-scroll]") || window;
    let lastScrollY =
      scrollTarget === window ? window.scrollY : scrollTarget.scrollTop;

    function handleScroll() {
      const currentScrollY =
        scrollTarget === window ? window.scrollY : scrollTarget.scrollTop;
      const isSmallScreen = window.innerWidth < 640;

      if (!isSmallScreen || currentScrollY < 24) {
        setIsMobileChromeHidden(false);
      } else if (currentScrollY > lastScrollY + 8) {
        setIsMobileChromeHidden(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setIsMobileChromeHidden(false);
      }

      lastScrollY = Math.max(currentScrollY, 0);
    }

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function handleSearch(event) {
    const search = event.target.value.trim();

    if (event.key === "Enter" && search) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-3 py-2 sm:px-4 sm:py-3 lg:px-6">
      <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap sm:gap-3">
        <button
          type="button"
          aria-label="Open sidebar"
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 lg:hidden ${
            isMobileChromeHidden
              ? "pointer-events-none -translate-y-10 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100"
              : ""
          }`}
          onClick={onMenuClick}
        >
          <FiMenu />
        </button>

        <div className="order-3 relative w-full min-w-0 flex-1 sm:order-none sm:max-w-xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search retailer"
            onKeyDown={handleSearch}
            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-[13px] outline-none focus:ring-2 focus:ring-blue-200 sm:text-sm"
          />
        </div>

        <div
          className={`ml-auto flex items-center gap-2 transition duration-200 sm:gap-4 ${
            isMobileChromeHidden
              ? "pointer-events-none -translate-y-10 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100"
              : ""
          }`}
        >
          <button className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600">
            <FiBell />
          </button>

          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-sm font-semibold text-white">R</div>
            <div className="hidden sm:block">
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
