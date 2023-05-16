import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Html5QrcodePlugin from '../../components/Scanner/barcodeScanner';

interface upcArray {
  UPC: string;
  quantity: number;
  onHand: number;
  salesTax: boolean;
  location: 'whitewell';
}

export function UpcScanner() {
  const { register, handleSubmit, setValue, getValues } = useForm<upcArray>();
  const [upc, setUpc] = useState<upcArray[]>([]);
  const [upcc, setUpcc] = useState<number>();
  const [openScanner, setOpenScanner] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const setScannerValue = (upc: any) => {
    setValue('UPC', upc);
    setOpenScanner(false);
  };

  return (
    <div className="flex flex-col flex-1 rounded-2xl shadow-xl py-6 m-4 bg-base-300 justify-center items-center ">
      <div className="flex flex-col p-6 items-center justify-center w-full">
        {openScanner ? (
          <Html5QrcodePlugin qrCodeSuccessCallback={setScannerValue} />
        ) : (
          ''
        )}
        <form
          onSubmit={submitUpcData}
          className="flex flex-col gap-4 items-center w-2/3 md:w-1/2 flex-1"
        >
          <div className="flex w-full gap-4 justify-center items-center">
            <input
              className="input input-primary w-full text-center"
              placeholder="upc"
              {...register('UPC', { required: true })}
            />
            <button
              className="btn btn-secondary"
              onClick={() => setOpenScanner((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </button>
          </div>
          <input
            className="input input-primary w-full  text-center"
            placeholder="quantity"
            {...register('quantity', { required: true })}
          />
          <input
            className="input input-primary w-full text-center"
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
        <button
          className="btn"
          onClick={() =>
            navigate(
              `/location/${getValues('location')}/item/${getValues('UPC')}`
            )
          }
        >
          Search
        </button>
      </div>
    </div>
  );
}
