import React from 'react';

export default function TransferInventory() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-1 card-normal p-4">
        <div className="flex flex-col flex-1 bg-secondary rounded-lg glass">
          <div className="flex justify-between px-4 pt-4 bg-secondary-focus rounded-t-lg pb-2 shadow-md bg-opacity-50">
            <div className="text-lg flex items-center">From</div>
            <select className="select">
              <option>Whitwell</option>
            </select>
          </div>
          <div className="flex-1 px-2">test</div>
        </div>
      </div>
      <div>test</div>
      <div className="flex-1"></div>
    </div>
  );
}
