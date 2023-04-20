import React from "react";
import { MdClose } from "react-icons/md";

const PurchaseSummaryModal = ({ setNewUserModalPage, setSubPage }) => {
  return (
    <div className="bg-white rounded-xl w-[60%] h-[80vh] p-10">
      <div className="flex justify-between items-center mb-8">
        <h5 className=" text-2xl font-bold text-vengray">Add New Users</h5>{" "}
        <MdClose
          className="text-2xl cursor-pointer"
          onClick={() => setSubPage("")}
        />
      </div>
      <div className="flex flex-col gap-6 mb-8">
        <p className="text-vengray text-lg font-semibold">
          Currency: <span>USD</span>
        </p>
        <p className="text-vengray text-lg font-semibold">
          Account type: <span>Starter Plan</span>
        </p>
        <p className="text-vengray text-lg font-semibold">
          Number of users: <span>1</span>
        </p>
        <div className="flex justify-between ">
          <p className="text-vengray text-lg font-semibold">
            Duration: <span>1 year</span>
          </p>
          <p className="text-vengray text-lg font-semibold">$24</p>
        </div>
      </div>
      <div className=" mb-4 p-4 rounded-md flex justify-between total_amount_board bg-[#ECF2FB]">
        <p className="text-2xl text-vengray">Total amount to be paid</p>{" "}
        <p className="text-2xl font-bold text-vengray">$24</p>
      </div>
      <div className="flex justify-end">
      <button onClick={()=>setNewUserModalPage(3)}
              className="text-sm w-48 bg-venblue py-2 px-4 text-white rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              type="button"
            >
              Proceed to Payment
            </button>
      </div>
    </div>
  );
};

export default PurchaseSummaryModal;
