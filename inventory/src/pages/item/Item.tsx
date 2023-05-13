import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const itemLoader = ({ params }: { params: any }) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:12000/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ upc: params.upc }),
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
    <div>
      <div>{item.upc}</div>
      <div>{item.quantity}</div>
      <div>{item.onHand}</div>
      <div>{`${item.salesTax}`}</div>
      <div>{item.location}</div>
    </div>
  );
}
