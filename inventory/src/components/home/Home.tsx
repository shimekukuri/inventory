import React from 'react';

export default function Home() {
  return (
    <div className="flex-1 flex">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex justify-center items-center p-4">
          <div className="card">
            <div className="card glass">
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>test2</div>
        <div>test3</div>
        <div>test4</div>
        <div className="flex justify-center items-center p-4">
          <div className="card">
            <div className="card glass">
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
