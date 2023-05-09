import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

interface upcArray {
  UPC: string;
  quantity: number;
  onHand: number;
  salesTax: boolean;
  location: 'whitewell';
}

function App() {
  const { register, handleSubmit, setValue, getValues } = useForm<upcArray>();
  const [upc, setUpc] = useState<upcArray[]>([]);
  const [upcc, setUpcc] = useState<number>();

  const submitUpcData = handleSubmit((data: upcArray) => {
    console.log(data);
    return fetch('http://localhost:12000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        upc: data.UPC,
        quantity: data.quantity,
        onHand: data.onHand,
        salesTax: data.salesTax,
        location: data.location,
      }),
    })
      .then((response) => response.json())
      .then((d) => {
        console.log('success', d);
        setValue('UPC', '');
      });
  });

  const sendToServer = () => {
    fetch('http://localhost:1200/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        upc: getValues('UPC'),
        quantity: getValues('quantity'),
        onHand: getValues('onHand'),
        salesTax: getValues('salesTax'),
        location: getValues('location'),
      }),
    });
  };

  const checkUpc = () => {
    const { UPC } = getValues();
    console.log(UPC);
    if (!UPC) {
      return;
    }

    fetch('http://localhost:12000/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ upc: UPC }),
    })
      .then((res) => {
        if (!res.ok) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        setValue('UPC', data.upc);
        setValue('quantity', data.quantity);
        setValue('onHand', data.ohHand);
        setValue('salesTax', data.salesTax);
      });
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-secondary">
      <div className="h-16 shadow-2xl bg-primary flex items-center justify-center font-extrabold">
        ACCESS PHARMACIES INVENTORY TOOL
      </div>
      <div className="overflow-y-scroll min-h-max flex-1 rounded-2xl shadow-xl p-6 m-4 glass">
        <div className="flex flex-col p-6 items-center justify-center">
          <form
            onSubmit={submitUpcData}
            className="flex flex-col gap-4 items-center w-2/3 flex-1"
          >
            <div className="flex w-full gap-4 justify-center items-center">
              <input
                className="input input-primary w-full max-w-xs text-center"
                placeholder="upc"
                {...register('UPC', { required: true })}
              />
            </div>
            <input
              className="input input-primary w-full max-w-xs text-center"
              placeholder="quantity"
              {...register('quantity', { required: true })}
            />
            <input
              className="input input-primary w-full max-w-xs text-center"
              placeholder="On Hand"
              {...register('onHand', { required: true })}
            />
            <label htmlFor="sales-tax">Sales Tax?</label>
            <input
              type="checkbox"
              className="checkbox"
              id="sales-tax"
              {...register('salesTax')}
            />
            <select
              {...register('location', { required: true })}
              className="select"
            >
              <option value="whitwell">whitwell</option>
            </select>
            <input type="submit" className="btn btn-primary" />
          </form>
          {upc.map(({ UPC, quantity }) => {
            return (
              <>
                <div>{UPC}</div>
                <div>{quantity}</div>
              </>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn" onClick={() => checkUpc()}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
