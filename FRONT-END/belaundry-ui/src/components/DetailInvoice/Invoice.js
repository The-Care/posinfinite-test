import * as React from 'react';
import { FaChevronLeft, FaWhatsapp } from 'react-icons/fa';

export default function Invoice() {
  return (
    <section>
      <div className="mb-2">
        <a href="/">
          <FaChevronLeft className="text-3xl text-title mt-6 ml-3" />
        </a>
      </div>
      <div className="container pt-7">
        <div className="bg-white rounded-t-lg">
          <div className="text-center py-3 bg-primary rounded-t-lg">
            <h1 className="uppercase font-bold text-2xl text-slate-50">order summary</h1>
          </div>
          <div className="text-end text-title p-3 text-[13px]">
            <p>ORDER #21258</p>
          </div>
          <div className="text-base p-3">
            <p className="font-bold">Jhon Doe</p>
            <p className="text-[13px] text-slate-600">123 Pasir Ris,</p>
            <p className="text-[13px] text-slate-600">13810, Singapura</p>
          </div>
          {/*  */}
          <div className="w-full pt-2">
            <div className="flex justify-between px-3 pt-2 pb-1 border-b-[1px] border-b-primary">
              <div className="basis-1/5">
                <img src="../images/bagof-1.png" alt="bagof-1" />
              </div>
              <div className="basis-3/5 px-2">
                <h2 className="font-semibold text-[14px] tracking-wider text-slate-800">Bag og Laundry</h2>
                <p className="text-title text-[12px]">Qty: 2</p>
              </div>
              <div className="basis-1/4 text-center ">
                <span className="text-[9.5px] text-slate-600">Total</span>
                <h3 className="text-primary font-semibold text-[14px]">$ 180.00</h3>
              </div>
            </div>
            <div className="flex justify-between px-3 pt-2 pb-1 border-b-[1px] border-b-primary">
              <div className="basis-1/5">
                <img src="../images/bagof-1.png" alt="bagof-1" />
              </div>
              <div className="basis-3/5 px-2">
                <h2 className="font-semibold text-[14px] tracking-wider text-slate-800">Bag og Laundry</h2>
                <p className="text-title text-[12px]">Qty: 2</p>
              </div>
              <div className="basis-1/4 text-center ">
                <span className="text-[9.5px] text-slate-600">Total</span>
                <h3 className="text-primary font-semibold text-[14px]">$ 180.00</h3>
              </div>
            </div>
            <div className="flex justify-between px-3 pt-2 pb-1 border-b-[1px] border-b-primary">
              <div className="basis-1/5">
                <img src="../images/bagof-1.png" alt="bagof-1" />
              </div>
              <div className="basis-3/5 px-2">
                <h2 className="font-semibold text-[14px] tracking-wider text-slate-800">Bag og Laundry</h2>
                <p className="text-title text-[12px]">Qty: 2</p>
              </div>
              <div className="basis-1/4 text-center ">
                <span className="text-[9.5px] text-slate-600">Total</span>
                <h3 className="text-primary font-semibold text-[14px]">$ 180.00</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="text-center py-3 bg-primary rounded-b-lg uppercase flex justify-between px-3 text-slate-100 font-semibold">
            <p className="tracking-wider">total order</p>
            <p>$ 204.00</p>
          </div>
        </div>
        <div className="w-full mt-8">
          <a href="/" className="hover:no-underline text-white">
            <div className="bg-third p-4 rounded-xl uppercase text-center font-semibold">
              <FaWhatsapp className="text-3xl inline mr-2" />
              <span>whatsapp us</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
