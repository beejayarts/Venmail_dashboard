import React,{useState} from "react";
import SpamProcessing from "./SpamProcessing";
import SpamVerification from "./SpamVerification";

const SpamContent = () => {
  const [spamcontentTab, setSpamcontentTab] = useState(1)

  const handleSpamContentTab=(n)=>{
    setSpamcontentTab(n)
  }
  return <div>
    <h5 className="text-xl text-vengray block mb-8 font-bold">Spam Control</h5>
    <div className="sec-tab relative w-full border-b mb-8">
    <button onClick={()=>handleSpamContentTab(1)} className={`py-3 mr-10 text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold ${spamcontentTab==1? 'border-venblue border-b-4':''}`}>
          Spam Processing
        </button>
    <button onClick={()=>handleSpamContentTab(2)} className={`py-3 mr-10 text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold ${spamcontentTab==2? 'border-venblue border-b-4':''}`}>
          Spam Verification
        </button>
    </div>
    <div className="spamContentTabContent">
      {spamcontentTab==1 && <SpamProcessing/>}
      {spamcontentTab==2 && <SpamVerification/>}
    </div>
  </div>;
};

export default SpamContent;
