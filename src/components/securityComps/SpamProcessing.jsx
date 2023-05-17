import React from "react";

const SpamProcessing = () => {
  return (
    <div>
      <div>
        <h5 className="text-vengray text-lg font-bold mb-4">
          Spam Processing type
        </h5>
        <p className="text-vengray text-base ">
          Our spam filters analyze the emails at various levels. You can choose
          the level of spam filtering required for the entire organization.
        </p>
        <div className="spam_filters flex flex-wrap gap-6 my-4">
          <div className="items-center flex gap-2">
            <input id="completeFilter" name="spamFilter" type="radio" />{" "}
            <label className="text-vengray text-base" htmlFor="completeFilter">
              Complete
            </label>
          </div>
          <div className="items-center flex gap-2">
            <input id="contentFilter" name="spamFilter" type="radio" />{" "}
            <label className="text-vengray text-base" htmlFor="contentFilter">
              Content only
            </label>
          </div>
          <div className="items-center flex gap-2">
            <input id="senderFilter" name="spamFilter" type="radio" />{" "}
            <label className="text-vengray text-base" htmlFor="senderFilter">
              Sender only
            </label>
          </div>
          <div className="items-center flex gap-2">
            <input id="senderHeaderFilter" name="spamFilter" type="radio" />{" "}
            <label
              className="text-vengray text-base"
              htmlFor="senderHeaderFilter"
            >
              Sender and header only
            </label>
          </div>
          <div className="items-center flex gap-2">
            <input id="configuredFilter" name="spamFilter" type="radio" />{" "}
            <label
              className="text-vengray text-base"
              htmlFor="configuredFilter"
            >
              Configured spam settings
            </label>
          </div>
          <div className="items-center flex gap-2">
            <input id="offFilter" name="spamFilter" type="radio" />{" "}
            <label className="text-vengray text-base" htmlFor="offFilter">
              Off
            </label>
          </div>
        </div>
        <div>
          <p className="text-vengray text-base mb-4">
            Do you want to enable system-level spam rejection?
          </p>
          <div className="flex gap-4 flex-wrap">
            <div className="items-center flex gap-2">
              <input
                id="ignoreFilter"
                name="spamRejectionFilter"
                type="radio"
              />{" "}
              <label className="text-vengray text-base" htmlFor="ignoreFilter">
                Ignore
              </label>
            </div >
            <div className="items-center flex gap-2">
              <input
                id="deleteFilter"
                name="spamRejectionFilter"
                type="radio"
              />{" "}
              <label className="text-vengray text-base" htmlFor="deleteFilter">
                Delete
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="rejectFilter"
                name="spamRejectionFilter"
                type="radio"
              />{" "}
              <label className="text-vengray text-base" htmlFor="rejectFilter">
                Reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="quarantineFilter"
                name="spamRejectionFilter"
                type="radio"
              />{" "}
              <label className="text-vengray text-base" htmlFor="quarantineFilter">
                Quarantine
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpamProcessing;
