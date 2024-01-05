import React from "react";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="TabContent flex gap-6 items-center justify-around flex-col bg-white">
      {children}
    </div>
  ) : null;
};

export default TabContent;
