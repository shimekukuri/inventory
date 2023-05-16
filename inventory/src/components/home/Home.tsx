import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { drawerContext } from '../../context/drawerContext/DrawerContext';

export default function Home() {
  const { drawerState, setDrawerState } = useContext(drawerContext);

  return (
    <div className="flex-1 flex">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <div className="flex justify-center items-center animate-opacity-to-one-200 opacity-0">
          <Link
            to={'/upcScanner'}
            onClick={() => setDrawerState!(false)}
            className="flex-1"
          >
            <div
              className="card glass bg-primary hover:bg-secondary shadow-2xl"
              style={{ width: '100%', height: '0', paddingBottom: '100%' }}
            >
              <div className="card-body justify-center items-center">
                <h2 className="card-title text-center">UPC SCANNER</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center animate-opacity-to-one-400 opacity-0">
          <div
            className="card glass bg-accent-focus hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body items-center">
              <h2 className="card-title text-center">Inventory Transfer</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center animate-opacity-to-one-600 opacity-0">
          <div
            className="card glass bg-secondary hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body items-center">
              <h2 className="card-title text-center">Quick Reports</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center animate-opacity-to-one-800 opacity-0">
          <div
            className="card glass bg-primary-content hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body">
              <h2 className="card-title">Profile</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center animate-opacity-to-one opacity-0">
          <div
            className="card glass bg-neutral hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
