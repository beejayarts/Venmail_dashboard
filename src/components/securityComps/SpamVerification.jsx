import React from "react";

const SpamVerification = () => {
  return (
    <div>
      <div className="border-gray-200 pt-4 pb-10 border-b-2">
        <h5 className="text-vengray text-lg font-bold mb-4">SPF Verication</h5>
        <p className="text-vengray text-base mb-6 ">
          Sender Policy Framework, commonly know as SPF, is a text record
          associated with the domain to identify the servers permitted to send
          emails using the particular domain name. The administrator can decide
          the action that has to be taken on such emails.
        </p>
        <div className="spf_failure mb-4">
          <h6 className="mb-4 font-bold text-vengray text-lg">
            Action of SPF Failure
          </h6>
          <div className="radio_group flex gap-4 flex-wrap">
            <div className="items-center flex gap-2">
              <input id="spfNoneFilter" name="spfFailureFilter" type="radio" />{" "}
              <label className="text-vengray text-base" htmlFor="spfNoneFilter">
                None
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input id="spfTempoFilter" name="spfFailureFilter" type="radio" />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="spfTempoFilter"
              >
                Temporary reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="spfPermanentFilter"
                name="spfFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="spfPermanentFilter"
              >
                Permanent reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input id="spfMovedFilter" name="spfFailureFilter" type="radio" />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="spfMovedFilter"
              >
                Moved to quarantine
              </label>
            </div>
          </div>
        </div>
        <div className="spf_soft_failure">
          <h6 className="mb-4 font-bold text-vengray text-lg">
            Action on SPF soft Failure
          </h6>
          <div className="radio_group flex gap-4 flex-wrap">
            <div className="items-center flex gap-2">
              <input
                id="spfNoneFilter"
                name="spfSoftFailureFilter"
                type="radio"
              />{" "}
              <label className="text-vengray text-base" htmlFor="spfNoneFilter">
                None
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="spfTempoFilter"
                name="spfSoftFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="spfTempoFilter"
              >
                Temporary reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="spfPermanentFilter"
                name="spfSoftFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="spfPermanentFilter"
              >
                Permanent reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="spfMovedFilter"
                name="spfSoftFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="spfMovedFilter"
              >
                Moved to quarantine
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="dkim_verification  border-gray-200 pt-4 pb-10 border-b-2">
        <h5 className="text-vengray text-lg font-bold mb-4">
          DKIM Verification
        </h5>
        <p className="text-vengray text-base mb-6 ">
          DKIM is an email authentication method which uses encryption to
          validate if an email is generated from systems authorized by the
          domains administrator. Emails are detected as spam in case of DKIM
          failure. The administrator can decide the action that has to be taken
          on such emails.
        </p>
        <div className="spf_failure mb-4">
          <h6 className="mb-4 font-bold text-vengray text-lg">
            Action on DKIM failure
          </h6>
          <div className="radio_group flex gap-4 flex-wrap">
            <div className="items-center flex gap-2">
              <input
                id="dkimNoneFilter"
                name="DKIMFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dkimNoneFilter"
              >
                None
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dkimTempoFilter"
                name="DKIMFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dkimTempoFilter"
              >
                Temporary reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dkimPermanentFilter"
                name="DKIMFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dkimPermanentFilter"
              >
                Permanent reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dkimMovedFilter"
                name="DKIMFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dkimMovedFilter"
              >
                Moved to quarantine
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* DMARC */}
      <div className="dmarc_verification  border-gray-200 pt-4 pb-10 border-b-2">
        <h5 className="text-vengray text-lg font-bold mb-4">
        DMARC Verification
        </h5>
        <p className="text-vengray text-base mb-6 ">
        DMARC is an email authentication protocol, which builds on the widely deployed SPF and DKIM protocols. In case of authentication failure, if the DMARC policy set to quarantine, the administrator of the recipient domain can choose to mark emails as spam/allow/quarantine emails based on their requirements.
        </p>
        <div className="spf_failure mb-4">
          <h6 className="mb-4 font-bold text-vengray text-lg">
          Action on DMARC failure
          </h6>
          <div className="radio_group flex gap-4 flex-wrap">
            <div className="items-center flex gap-2">
              <input
                id="dmarcNoneFilter"
                name="DMARCFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dmarcNoneFilter"
              >
                None
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dmarcTempoFilter"
                name="DMARCFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dmarcTempoFilter"
              >
                Move to spam
              </label>
            </div>
         
            <div className="items-center flex gap-2">
              <input
                id="dmarcMovedFilter"
                name="DMARCFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dmarcMovedFilter"
              >
                Moved to quarantine
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* DNSBLE VERIFICATION */}
      <div className="dkim_verification  border-gray-200 pt-4 pb-10 border-b-2">
        <h5 className="text-vengray text-lg font-bold mb-4">
        DNSBL Verification
        </h5>
        <p className="text-vengray text-base mb-6 ">
        DNSBL is a consolidated blocked listed based on user spam marking, abuse patterns, and certain third-party block lists. Emails are detected as spam if the sending domain/email address or IP address is present on the blocked list. The administrator can decide the action that has to be taken on such emails.
        </p>
        <div className="spf_failure mb-4">
          <h6 className="mb-4 font-bold text-vengray text-lg">
          Action on DNSBL failure
          </h6>
          <div className="radio_group flex gap-4 flex-wrap">
           
       
            <div className="items-center flex gap-2">
              <input
                id="dnsblPermanentFilter"
                name="DNSBLFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dnsblPermanentFilter"
              >
                Permanent reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dnsblMoveFilter"
                name="DNSBLFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dnsblMoveFilter"
              >
                Move to spam
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dkimTempoFilter"
                name="DNSBLFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dnsblTempoFilter"
              >
                Temporary reject
              </label>
            </div>
            <div className="items-center flex gap-2">
              <input
                id="dkimMovedFilter"
                name="DNSBLFailureFilter"
                type="radio"
              />{" "}
              <label
                className="text-vengray text-base"
                htmlFor="dkimMovedFilter"
              >
                Moved to quarantine
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpamVerification;
