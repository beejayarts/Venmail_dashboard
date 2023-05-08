import React from "react";

const PasswordPolicy = () => {
  return (
    <div>
      <div className="pp_header mb-8">
        <h5 className="text-lg font-bold text-vengray mb-4">Password Policy</h5>
        <p className="text-base text-vengray ">
          A password policy is a set of rules defined to increase account
          security and encourage users to set strong password for their email
          accounts.
        </p>
      </div>
      <div className="pp_form flex flex-col gap-4">
        <div className="pass_length flex flex-col gap-2">
          <span className="text-vengray text-base">
            Minimum password length
          </span>
          <input
            className=" p-3 border-gray-400  focus:outline-none  w-3/4 border rounded-lg "
            value={8}
          />
        </div>
        <div className="pass_history flex flex-col gap-2">
          <span className="text-vengray text-base">
            Minimum no. of password in history
          </span>
          <input
            className=" p-3 border-gray-400  focus:outline-none  w-3/4 border rounded-lg "
            value={1}
          />
        </div>
        <div className="pass_history flex flex-col gap-2">
          <span className="text-vengray text-base">
            Minimum no. of password special characters
          </span>
          <input
            className=" p-3 border-gray-400  focus:outline-none  w-3/4 border rounded-lg "
            value={1}
          />
        </div>
        <div className="pass_history flex flex-col gap-2">
          <span className="text-vengray text-base">
            Minimum no. of password numeric characters
          </span>
          <input
            className=" p-3 border-gray-400  focus:outline-none  w-3/4 border rounded-lg "
            value={1}
          />
        </div>
        <div className="pass_history flex flex-col gap-2">
          <span className="text-vengray text-base">
            Password Expiry Period (1 to 1000days)
          </span>
          <input
            className=" p-3 border-gray-400  focus:outline-none  w-3/4 border rounded-lg "
            value={60}
          />
        </div>
        <div className="send_password_expiry flex gap-3 ">
          <input
            className="border border-gray-300"
            id="passXpiry"
            type="checkbox"
          />
          <label className="text-vengray text-base" htmlFor="passXpiry">
            Send password expiry notification to users
          </label>
        </div>
      </div>
      <div className="flex mt-6 mb-10 gap-4">
            <button  className="border-2 border-venblue hover:bg-venblue duration-300 transition-all hover:text-white   p-2 rounded-full text-base text-venblue w-28">
              Reset
            </button>
            <button className=" bg-venblue hover:bg-vengray duration-300 transition-all text-white p-2 rounded-full text-base  w-28">
              Add
            </button>
          </div>
    </div>
  );
};

export default PasswordPolicy;
