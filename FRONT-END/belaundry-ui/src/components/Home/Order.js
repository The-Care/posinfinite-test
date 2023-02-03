import React from 'react';

export default function Order() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="w-full">
          <div className="title pb-3">
            <h2 className="text-title font-semibold uppercase">previous order</h2>
          </div>
          <a href="/product/invoice">
            <div className="w-full flex justify-between">
              <div className="flex flex-wrap w-[70%] bg-white rounded-l-md">
                <div className="py-[11px] px-2">
                  <img src="./images/bag-of.png" style={{ width: '67px', height: '73px' }} alt="bag-of" />
                </div>
                <div className="py-2 px-2">
                  <h2 className="inline">Bag Of Laundry</h2>
                  <p className="text-[10px] mt-3 text-slate-500">Total Order</p>
                  <h3 className="font-semibold text-primary">$ 180.00</h3>
                </div>
              </div>
              <div className="bg-gradient-to-b from-primary to-[#88BBEE] w-[30%] rounded-r-md">
                <div className="h-3/4 flex flex-col justify-center items-center pt-2">
                  <img src="./images/coolicon.png" className="w-8 h-8" alt="coolicon" />
                </div>
                <div className="h-1/4 text-center flex flex-col justify-end">
                  <p className="text-white uppercase mb-2 text-[10px]">invoice</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
