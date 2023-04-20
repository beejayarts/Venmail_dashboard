import React from 'react'
import { MdClose } from "react-icons/md";

const PaymentMethodModal = ({ setNewUserModalPage, setSubPage }) => {
  return (
    <div  className="bg-white rounded-xl w-[60%] h-[80vh] p-10">
         <div className="flex justify-between items-center mb-8">
        <h5 className=" text-2xl font-bold text-vengray">Payment method</h5>{" "}
        <MdClose
          className="text-2xl cursor-pointer"
          onClick={() => setSubPage("")}
        />
      </div>
    </div>
  )
}

export default PaymentMethodModal