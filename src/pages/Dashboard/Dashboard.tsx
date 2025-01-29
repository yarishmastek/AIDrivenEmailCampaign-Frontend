import { useState } from "react";
import { TABS_NAMES } from "../../utils/common.type";
import EmailCampaign from "./components/EmailCampaign/EmailCampaign";
import CustomerSegments from "./components/CustomerSegments/CustomerSegments";
import { useNavigate } from "react-router";

const Dashboard = ({ setIsLoggedIn }: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeTab, setActiveTab] = useState(TABS_NAMES.EMAIL_CAMPAIGN);
  const navigate = useNavigate();

  const handalLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);

    navigate("/")
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="text-2xl py-5 text-center border-b">
          <span className="text-secondaryBackgroundColor font-poppins-bold">
            CompanyX
          </span>{" "}
          Email Marketing Platform
        </div>
        <button className="text-red-700 font-poppins-bold  absolute right-12 top-6 "
          onClick={handalLogOut}>
          Log Out
        </button>
      </div>
      <div>
        <div className="grid mx-2 gap-y-2 min-[400px]:grid-cols-2 text-center shadow-md">
          <button
            onClick={() => setActiveTab(TABS_NAMES.EMAIL_CAMPAIGN)}
            className={`cursor-pointer font-poppins-medium transition-all duration-150 text-lg ${activeTab === TABS_NAMES.EMAIL_CAMPAIGN
              ? "bg-secondaryBackgroundColor text-white"
              : "bg-slate-50"
              }  py-2`}
          >
            {TABS_NAMES.EMAIL_CAMPAIGN}
          </button>
          <button
            onClick={() => setActiveTab(TABS_NAMES.CUSTOMER_SEGMENTS)}
            className={`cursor-pointer font-poppins-medium transition-all duration-150 text-lg ${activeTab === TABS_NAMES.CUSTOMER_SEGMENTS
              ? "bg-secondaryBackgroundColor text-white"
              : "bg-slate-100"
              }  py-2`}
          >
            {TABS_NAMES.CUSTOMER_SEGMENTS}
          </button>
        </div>
      </div>
      {activeTab === TABS_NAMES.EMAIL_CAMPAIGN ? (
        <EmailCampaign />
      ) : (
        <CustomerSegments />
      )}
    </div>
  );
};

export default Dashboard;
