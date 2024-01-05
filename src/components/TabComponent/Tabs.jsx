import React from "react";
import { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import Button from "../Button";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="Tabs bg-white mb-10 shadow-lg">
      <ul className="nav flex mx-[16rem] mb-6 max-sm:mx-16">
        <TabNavItem
          title="Calling"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Field Visit"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Branch"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <div className="flex gap-3 items-center bg-white">
            <Button title="View SFO List" />
            <Button title="Special Projects" />
            <Button title="Repeat Loan" />
          </div>
          <div className="flex gap-3 items-center bg-white">
            <Button title="Vyapar Loan" />
            <Button title="Calling Records" />
            <Button title="Group Appraisal" />
          </div>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <div className="flex gap-3 items-center bg-white">
            <Button title="Income Chart" />
            <Button title="Upload Loan Card" />
            <Button title="Life Insurance" />
          </div>
          <div className="flex gap-3 items-center bg-white">
            <Button title="Pre-Closure Intimation" />
            <Button title="PTP Visit" />
          </div>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <div className="flex gap-3 items-center bg-white">
            <Button title="Activity Planner" />
            <Button title="KYC Verification" />
            <Button title="Incentive" />
          </div>
          <div className="flex gap-3 items-center bg-white">
            <Button title="OD Bucket" />
            <Button title="Employee Referral" />
            <Button title="Employee Connect" />
          </div>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
