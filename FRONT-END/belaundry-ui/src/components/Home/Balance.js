import React from 'react';

export default function Balance() {
  return (
    <section className="balance mb-14">
      <div className="bounce w-full h-full relative bg-secondary lg:bg-none">
        <div className="container w-full mt-12 absolute z-2">
          <div className="card-balance">
            <div className="user text-white pb-3">
              <h1>Welcome, John</h1>
            </div>
            <div className="card-balance flex bg-slate-100 rounded-lg h-40 shadow-md">
              <div className="w-1/2 relative overflow-hidden rounded-lg">
                <div className="z-1 absolute w-full -left-8 -top-8 flex">
                  <div className="h-28 w-28 bg-primary rounded-full" />
                  <div className="flex flex-col justify-center">
                    <div className="h-6 w-6 bg-secondary rounded-full mt-4 ml-3" />
                  </div>
                </div>
              </div>
              <div className="wealth w-1/2 flex flex-col justify-end items-end py-3 pr-4">
                <p className="text-slate-600 mb-1">Your Balance</p>
                <h1 className="text-primary font-bold text-3xl">$ 200.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
