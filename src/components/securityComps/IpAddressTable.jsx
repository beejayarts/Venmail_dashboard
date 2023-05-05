import React from "react";

const IpAddressTable = () => {
  return (
    <div>
      <button className="bg-venblue text-base text-white rounded-full w-24 p-3">
        + Add
      </button>
      {/* IP address popup */}

      <div className="ipInputPopContainer flex items-center justify-center fixed top-0 left-0 bg-[rgba(0,0,0,.3)] h-[100vh] w-[100vw]">
        <div className="ipInputPop bg-white w-[35%] rounded-lg h-[60vh] p-8">
          <h5 className="text-xl block mb-8 font-bold text-vengray">Add IP Addresses</h5>
         <div>
         <div className="fromIp mb-4">
            <p>From IP address*</p>
            <input className="border border-gray-300 border-3 p-2 rounded-lg focus:outline-none w-full" />
          </div>
          <div className="toIp">
            <p>To IP address*</p>
            <input className="border border-gray-300 border-3 p-2 rounded-lg focus:outline-none w-full" />
          </div>
         </div>
        </div>
      </div>

      <div className="iptableCollection mt-10">
        <table className=" w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-[#F5F6FA] p-8 border border-gray-200">
              <th className="p-4 border border-gray-200 text-vengray">
                From IP Address
              </th>
              <th className="p-4 text-vengray">From IP Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border border-gray-200 text-center text-[#787982]">
                No IP address has been added
              </td>
              <td className="p-4 border border-gray-200 text-center text-[#787982]">
                No IP address has been added
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IpAddressTable;
