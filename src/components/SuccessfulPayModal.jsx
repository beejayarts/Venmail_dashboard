import React from "react";

import Lottie from "lottie-react-web";
import animationData from "./../assets/success.json";

const SuccessfulPayModal = ({setActiveMenu}) => {
  return (
    <div className="bg-white rounded-xl w-[30%] h-[60vh] p-10">
      
     <div className="w-28 mx-auto mb-8">
     <Lottie
        options={{
          animationData: animationData,
        }}
      />
     </div>
     <div>
        <h5 className="text-2xl font-bold text-vengray text-center">Payment Successful</h5>
        <p className="text-center mb-4">Your payment was successful and additional users slots have been added, proceed to the <span className="font-bold text-venblue">Users</span> to add users to organization</p>
     </div>
     <div className="flex justify-center">
      <button onClick={() => setActiveMenu(3)}
              className="text-sm w-48 bg-venblue py-2 px-4 text-white rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              type="button"
            >
            Go to users
            </button>
      </div>
    </div>
  );
};

export default SuccessfulPayModal;
