import type { Component } from "solid-js"
import StatusBadge from "./StatusBadge"
import UserAvatar from "./UserAvatar"
import ConclusionsTable from "./ConclusionsTable"
import DepreciationPolicyTable from "./DepreciationPolicyTable"
import UsefulLifeTable from "./UsefulLifeTable"
import AnalyticsTable from "./AnalyticsTable"
import DepreciationAllocationTable from "./DepreciationAllocationTable"
import RecalculationTable from "./RecalculationTable"
import ProgressStepper from "./ProgressStepper"
import myImage from '../assets/Avtar1.jpg'
import myimage from '../assets/Avtar2.jpg'
import mygmage from '../assets/Avtar3.jpg'
import myVmage from '../assets/Vector.png'
import type { AnalyticsTableData } from "../types/analytics";
import type { ConclusionsTableData } from "../types/conclusions"
import type { DepreciationAllocationData } from "../types/depreciation-allocation";
import type { UsefulLifeData } from "../types/useful-life";
import type { RecalculationData } from "../types/recalculation";
import type { DepreciationPolicyData } from "../types/depreciation-policy";

interface DepreciationSummaryProps {
  analyticsData: AnalyticsTableData | null;
  conclusionsData: ConclusionsTableData | null;
  allocationData: DepreciationAllocationData | null;
  usefulLifeData: UsefulLifeData | null;
  recalculationData: RecalculationData | null;
  policyData: DepreciationPolicyData | null;
}

const steps = [
  {
    text: "Data Collection",
    status: "success" as const,
  },
  {
    text: "Initial Review",
    status: "success" as const,
  },
  {
    text: "Adjustments",
    status: "pending" as const,
  },
  {
    text: "Final Approval",
    status: "pending" as const,
  }
];

const DepreciationSummary: Component<DepreciationSummaryProps> = (props) => {
  return (
    <div class="w-[1300px] h-[2310px] p-[16px] bg-gray-100">
      <div class="mx-auto p-4 space-y-4">
        {/* Progress Stepper */}
        <div class="w-full mb-1">
          <ProgressStepper steps={steps} />
        </div>

        <div class="border border-gray-200 w-[1258px] h-[272px] rounded-lg p-4 bg-white shadow-lg">
          <div class="w-full">
            <div class="flex justify-between items-center gap-[20px] mb-2">
              <div class="flex items-center space-x-2">
                <h1 class="font-inter font-bold text-base leading-[150%] tracking-[0%] text-gray-800">Depreciation Summary</h1>
                 
                <img class="w-[15px] h-[15px]" src={myVmage.src} alt="" />
                <div class="flex items-center space-x-2 ml-4 ">
                  <StatusBadge status="E/O" />
                  <StatusBadge status="P" />
                  <StatusBadge status="V/A" />
                  <StatusBadge status="D/D" />
                </div>
                
              </div>
              
              <div class="flex ">
              <div class="flex -space-x-3 rtl:space-x-reverse">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={myImage.src} alt="" />
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={myimage.src} alt="" />
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={mygmage.src} alt="" />
              </div>
              <button class="ml-2 bg-purple-400 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  View Team
              </button>
              </div>
         </div>
          </div>
          <div class="-mx-4">
          <hr class="border-t border-gray-400 "/>
          </div>
          <div class="my-4"> 
            <ConclusionsTable conclusionsData={props.conclusionsData} />
          </div>
        </div>

        <div class="space-y-4">
         
        <div class="border border-gray-200 rounded-lg p-4 bg-white shadow-lg w-[1258px] h-[312px]">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-gray-800 mb-2">Depreciation Policy</h2>
          <DepreciationPolicyTable policyData={props.policyData} />
        </div>
        <div class="w-[1258px] h-[284px] border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-gray-800 mb-2">Review of Useful Life</h2>
          <UsefulLifeTable usefulLifeData={props.usefulLifeData} />
          </div>
          <div class="w-[1258px] h-[362px] border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-gray-800 mb-2">Analytics</h2>
          <AnalyticsTable analyticsData={props.analyticsData} />
          </div>
          <div class="w-[1258px] h-[546px] border border-gray-200 rounded-lg p-4  bg-white shadow-lg">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-gray-800 mb-2">Depreciation Allocation</h2>
          <DepreciationAllocationTable allocationData={props.allocationData} />
          </div>
          <div class="w-[1258px] h-[400px] border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
          <h2 class="font-inter font-bold text-base leading-[150%] tracking-[0%] text-gray-800">Recalculation of Depreciation</h2>
          <h3 class="font-inter font-semibold text-base leading-[150%] tracking-[0%] text-gray-800 mb-2">Summary by Category</h3>
          <RecalculationTable recalculationData={props.recalculationData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepreciationSummary
