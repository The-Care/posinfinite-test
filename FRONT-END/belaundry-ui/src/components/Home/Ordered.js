import React from 'react';

export default function Ordered() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="w-full">
          <div className="title pb-3">
            <h2 className="text-title font-semibold uppercase">your most ordered</h2>
          </div>
          <div className="ordered relative">
            <div className="ordered-title h-2/5 flex flex-col justify-end absolute z-1 bottom-0 w-full text-white p-3">
              <h2 className="font-semibold text-2xl">Dry Cleaning</h2>
              <p>12x | total of $ 4.000</p>
            </div>
            <div className="w-full h-full rounded-lg">
              <img src="./images/dryclean.png" alt="dryclean" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
