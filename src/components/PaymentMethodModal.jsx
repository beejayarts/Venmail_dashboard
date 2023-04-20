import React from "react";
import { MdClose } from "react-icons/md";

const PaymentMethodModal = ({ setNewUserModalPage, setSubPage }) => {
  return (
    <div className="bg-white rounded-xl w-[60%] h-[80vh] p-10">
      <div className="flex justify-between items-center mb-8">
        <h5 className=" text-2xl font-bold text-vengray">Payment method</h5>{" "}
        <MdClose
          className="text-2xl cursor-pointer"
          onClick={() => setSubPage("")}
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-vengray text-base">
          Name on card
        </label>
        <input
          className="w-full p-2 outline-none border-[#C0C1C5] rounded-md border-2"
          type="text"
          placeholder="Jane Doe"
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-vengray text-base">
          Name on card
        </label>
        <input
          className="w-full p-2 outline-none border-[#C0C1C5] rounded-md border-2"
          type="number"
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div className="mb-8 flex gap-4">
        <div className="w-1/2">
          {" "}
          <label className="block mb-2 text-vengray text-base">
           Expiry date
          </label>
          <input
            className="w-full p-2 outline-none border-[#C0C1C5] rounded-md border-2"
            type="date"
            placeholder="12/12"
          />
        </div>
        <div className="w-1/2">
          {" "}
          <label className="block mb-2 text-vengray text-base">
           Security code (cvv)
          </label>
          <input
            className="w-full p-2 outline-none border-[#C0C1C5] rounded-md border-2"
            type="number"
            placeholder="000"
          />
        </div>
      </div>
      <div className="flex justify-end">
      <button onClick={()=>setNewUserModalPage(4)}
              className="text-sm w-48 bg-venblue py-2 px-4 text-white rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              type="button"
            >
              Pay now
            </button>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
