import React, { useState } from "react";
import AllNotifications from "./all-notifications";
import VerifiedNotifications from "./verified-notifications";
import MentionsNotifications from "./metions-notifications";

enum Tab {
  ALL = "all",
  VERIFIED = "verified",
  MENTIONS = "mentions",
}

const TabContent: React.FC<{ activeTab: Tab }> = ({ activeTab }) => {
  switch (activeTab) {
    case Tab.VERIFIED:
      return <VerifiedNotifications />;
    case Tab.MENTIONS:
      return <MentionsNotifications />;
    case Tab.ALL:
    default:
      return <AllNotifications />;
  }
};

const TabNotifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ALL);

  return (
    <div className="w-full">
      <div className="flex w-full h-[53px]">
        <button
          type="button"
          onClick={() => setActiveTab(Tab.ALL)}
          className={`relative flex items-center justify-center grow text-[15px] hover:bg-graylight ${
            activeTab == "all"
              ? "text-textblack font-bold"
              : "text-textlight font-semibold"
          }`}
        >
          Todas
          {activeTab == "all" && (
            <span className="absolute bottom-0 w-[56px] h-1 bg-primary rounded-sm" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab(Tab.VERIFIED)}
          className={`relative flex items-center justify-center grow text-[15px] hover:bg-graylight ${
            activeTab == "verified"
              ? "text-textblack font-bold"
              : "text-textlight font-semibold"
          }`}
        >
          Verificado
          {activeTab == "verified" && (
            <span className="absolute bottom-0 w-[75px] h-1 bg-primary rounded-sm" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab(Tab.MENTIONS)}
          className={`relative flex items-center justify-center grow text-[15px] hover:bg-graylight ${
            activeTab == "mentions"
              ? "text-textblack font-bold"
              : "text-textlight font-semibold"
          }`}
        >
          Menciones
          {activeTab == "mentions" && (
            <span className="absolute bottom-0 w-[79px] h-1 bg-primary rounded-sm" />
          )}
        </button>
      </div>
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default TabNotifications;
