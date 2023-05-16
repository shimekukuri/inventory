import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [dwrState, setDwrState] = useState<boolean>(false);
  const location = useLocation();
  const drawerToggle = () => {
    setDwrState((prev) => !prev);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={dwrState}
        readOnly
      />
      <div className="drawer-content">
        <div className="h-screen flex flex-col justify-between bg-neutral-content">
          <div className="navbar bg-primary flex justify-between">
            <a className="btn btn-ghost normal-case text-xl">Access Pharmacy</a>
            <div onClick={drawerToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </div>
          </div>
          {location.pathname !== '/' ? <Outlet /> : <div>test</div>}
          <footer className="footer footer-title justify-center items-center bg-opacity-40 bg-secondary-content pb-0 mb-0">
            James Tyler Hutchinson 2023
          </footer>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="mt-2 mb-2">
            <div className="btn btn-primary" onClick={() => setDwrState(false)}>
              Close
            </div>
          </li>
          <li className="mt-2 mb-2">
            <Link to={'/upcScanner'} onClick={() => drawerToggle()}>
              Upc Scanner
            </Link>
          </li>
          <li className="mt-2 mb-2">
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
