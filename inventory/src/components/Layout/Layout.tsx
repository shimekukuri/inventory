import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col justify-between bg-secondary">
      <div className="h-16 shadow-2xl bg-primary flex items-center justify-center font-extrabold">
        ACCESS PHARMACIES INVENTORY TOOL
      </div>
      <Outlet />
      <footer className="footer footer-title justify-center items-center bg-opacity-40 bg-secondary-content pb-0 mb-0">
        James Tyler Hutchinson 2023
      </footer>
    </div>
  );
}
