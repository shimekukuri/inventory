import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { drawerContext } from '../../context/drawerContext/DrawerContext';

export default function Home() {
  const { drawerState, setDrawerState } = useContext(drawerContext);

  return (
    <div className="flex-1 flex">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <div className="flex justify-center items-center">
          <Link
            to={'/upcScanner'}
            onClick={() => setDrawerState!(false)}
            className="flex-1"
          >
            <div
              className="card glass bg-primary hover:bg-secondary shadow-2xl"
              style={{ width: '100%', height: '0', paddingBottom: '100%' }}
            >
              <div className="card-body">
                <h2 className="card-title">UPC SCANNER</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="card glass bg-accent-focus hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body">
              <h2 className="card-title">Inventory Transfer</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="card glass bg-secondary hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body">
              <h2 className="card-title">Quick Reports</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
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
        <div className="flex justify-center items-center">
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
