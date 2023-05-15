import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const itemLoader = ({ params }: { params: any }) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:12000/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ upc: params.upc, location: params.location }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('fired');
        console.log(data);
        resolve({ item: data });
      });
  });
};

export default function Item() {
  //@ts-expect-error
  const { item } = useLoaderData();
  console.log(item);
  return (
    <div className="px-4">
      <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">UPC: {`${item.upc}`}</h2>
          <div className="divider"></div>
          <div>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div>{item.quantity}</div>
            </div>
            <div className="flex justify-between">
              <div>On Hand</div>
              <div>{item.onHand}</div>
            </div>
            <div className="flex justify-between">
              <div>Sales Tax</div>
              <div>{item.salesTax}</div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn w-28">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
