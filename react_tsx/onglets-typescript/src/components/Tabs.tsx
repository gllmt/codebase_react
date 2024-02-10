import { useState } from "react";
// import { tabsData1 } from "../data/tabs.js";

type TabsData = {
  buttonContent: string;
  tabHeading: string;
  txt: string;
};

export default function Tabs({tabsData}: {tabsData: TabsData[]}) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="max-w-2xl min-h-[250px] mx-auto rounded border border-slate-400 mb-10">
      <div className="flex divide-x divide-slate-700">
        {tabsData.map((_, index) => (
          <button
            onClick={() => setSelectedTab(index)}
            key={index}
            className="w-full p-4 uppercase font-medium bg-slate-200 hover:bg-slate-300 text-slate-950 transition-colors duration-300"
          >
            {tabsData[index].buttonContent}
          </button>
        ))}
      </div>
      <div className="text-slate-100 px-6 pt-6 pb-10">
          <p className="text-2xl font-semibold mb-2">
            {tabsData[selectedTab].tabHeading}
          </p>
          <p>
            {tabsData[selectedTab].txt}
          </p>
      </div>
    </div>
  )
}
