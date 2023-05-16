import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-1 flex">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <div className="flex justify-center items-center">
          <Link to={'/upcScanner'}>
            <div
              className="card glass bg-primary hover:bg-secondary shadow-2xl"
              style={{ width: '100%', height: '0', paddingBottom: '100%' }}
            >
              <div className="card-body">
                <h2 className="card-title">UPC SCANNER</h2>

                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="card glass bg-primary hover:bg-secondary shadow-2xl"
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
            className="card glass bg-primary hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="card glass bg-primary hover:bg-secondary shadow-2xl"
            style={{ width: '100%', height: '0', paddingBottom: '100%' }}
          >
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="card glass bg-primary hover:bg-secondary shadow-2xl"
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
