import React, { useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./ovpiechart.css";
import { BsCheckCircle } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";

import { overviewTableData } from "./../../data";

const OverviewContent = () => {
  const [filteredData, setFilteredData] = useState(overviewTableData);
  const handleFilterConf = () => {
    const filteredConfigured = overviewTableData.filter(
      (item) => item.configuration === true
    );
    setFilteredData(filteredConfigured);
  };
  const handleFilterNoConf = () => {
    const filteredNoConfigured = overviewTableData.filter(
      (item) => item.configuration === false
    );
    setFilteredData(filteredNoConfigured);
  };
  const handleFilterAllConf = () => {
    setFilteredData(overviewTableData);
  };

  // percentage value for pie chart
  let percentage = 95;
  return (
    <div>
      <div className="overview_details mb-10 ">
        <h4 className="text-xl mb-4 font-bold text-vengray">
          Security and Compliance Overview
        </h4>
        <p className="text-vengray text-base">
          Your security and compliance dashboard displays your overall
          compliance score which measures your progress in completing
          recommended actions to improve your organization’s security.
        </p>
      </div>
      <div className="overview_piechart flex gap-[10%] mb-10 items-center">
        <div className="w-[30%]">
          <CircularProgressbar
            styles={buildStyles({
              textColor: "#353744",
              pathColor: `${
                percentage <= 39
                  ? "#EB5757"
                  : percentage <= 69
                  ? "#FDA152"
                  : percentage <= 89
                  ? "#F2C94C"
                  : percentage <= 100
                  ? "#36AC65"
                  : ""
              }`,
            })}
            value={percentage}
            text={`${percentage}%`}
          />
          ;
        </div>
        <div className="pielegend w-[60%] ">
          <div className="colorbox flex flex-row gap-4 items-center">
            <div className="rounded-sm w-3 h-3 bg-[#EB5757]"></div>{" "}
            <span>0 to 39 - Low</span>
          </div>
          <div className="colorbox flex flex-row gap-4 items-center">
            <div className="rounded-sm w-3 h-3 bg-[#FDA152]"></div>{" "}
            <span>40 to 69 - Medium</span>
          </div>
          <div className="colorbox flex flex-row gap-4 items-center">
            <div className="rounded-sm w-3 h-3 bg-[#F2C94C]"></div>{" "}
            <span>70 to 89 - Good</span>
          </div>
          <div className="colorbox flex flex-row gap-4 items-center">
            <div className="rounded-sm w-3 h-3 bg-[#36AC65]"></div>{" "}
            <span>90 to 100 - Excellent</span>
          </div>
        </div>
      </div>
      <p className="text-center text-vengray font-bold">
        Your security and compliance score
      </p>
      <div className="overview_table mt-10">
        <div className="table_filters flex gap-3 justify-around">
          <button
            onClick={handleFilterAllConf}
            type="button"
            className=" w-[30%] flex flex-col items-center rounded-lg  hover:bg-[#F5F6FA] transition-all duration-300 py-2 border-[#e1e1e1] border-[1px] text-vengray text-base font-medium"
          >
            All Actions
            <span>16</span>
          </button>
          <button
            onClick={handleFilterConf}
            type="button"
            className=" w-[30%] flex flex-col items-center rounded-lg  hover:bg-[#F5F6FA] transition-all duration-300 py-2 border-[#e1e1e1] border-[1px] text-vengray text-base font-medium"
          >
            Configured
            <span>9</span>
          </button>
          <button
            onClick={handleFilterNoConf}
            type="button"
            className=" w-[30%] flex flex-col items-center rounded-lg  hover:bg-[#F5F6FA] transition-all duration-300 py-2 border-[#e1e1e1] border-[1px] text-vengray text-base font-medium"
          >
            Not Configured
            <span>7</span>
          </button>
        </div>
        <div className="overview_table_container max-h-[75vh] overflow-y-scroll mt-8">
          <table className="w-full table-auto ">
            <thead className="bg-[#F5F6FA]">
              <tr>
                <th className=" text-vengray text-base px-4 py-2">Action</th>
                <th className=" text-vengray text-base px-4 py-2">
                  Threat Type{" "}
                </th>
                <th className="text-vengray text-base px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => {
                const { action, threat, configuration, id } = item;
                return (
                  <tr key={id}>
                    <td className="border px-4 py-2">
                      <h5 className=" text-base text-vengray font-bold">
                        {action.title}
                      </h5>
                      <p className="text-vengray">{action.detail}</p>
                    </td>
                    <td className="border px-4 py-2">
                      <p className="text-vengray text-base">{threat}</p>
                    </td>
                    <td className="border  px-4 py-2">
                      {configuration ? (
                        <div className="text-sm text-[#36AC65] flex gap-3 items-center ">
                          <BsCheckCircle /> <p>Configured</p>
                        </div>
                      ) : (
                        <div className="text-sm text-[#FDA152] flex gap-3 items-center">
                          <RiErrorWarningLine/> <p>Not Configured</p>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
