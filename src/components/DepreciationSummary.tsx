import type { Component } from "solid-js"
import StatusBadge from "./StatusBadge"
import UserAvatar from "./UserAvatar"
import ConclusionsTable from "./ConclusionsTable"
import DepreciationPolicyTable from "./DepreciationPolicyTable"
import UsefulLifeTable from "./UsefulLifeTable"
import AnalyticsTable from "./AnalyticsTable"
import DepreciationAllocationTable from "./DepreciationAllocationTable"
import RecalculationTable from "./RecalculationTable"
import myImage from '../assets/Avtar1.jpg'
import myimage from '../assets/Avtar2.jpg'
import mygmage from '../assets/Avtar3.jpg'

const DepreciationSummary: Component = () => {
  const conclusions = [
    {
      text: "The work has been performed in accordance with the audit program.",
      preparation: "MC",
      review: "RT",
    },
    {
      text: "The work performed and the results obtained have been adequately documented.",
      preparation: "MC",
      review: "SH",
    },
    {
      text: "All necessary information has been collected for the presentation and disclosure in the financial statements.",
      preparation: "",
      review: "",
    },
    {
      text: "Based on audit procedures performed, the above objectives have been met and without any material exception noted.",
      preparation: "",
      review: "",
    },
  ]

  const depreciationPolicyAssets = [
    {
      category: "Leasehold Improvement",
      usefulLife2023: "31-120",
      residualRate2023: "-",
      depreciationRate2023: "10% - 39%",
      usefulLife2022: "31-120",
      residualRate2022: "-",
      depreciationRate2022: "10% - 39%",
    },
    {
      category: "Motor Vehicle",
      usefulLife2023: "40-120",
      residualRate2023: "-",
      depreciationRate2023: "10% - 30%",
      usefulLife2022: "40-120",
      residualRate2022: "-",
      depreciationRate2022: "10% - 30%",
    },
    {
      category: "Fixture & Furniture",
      usefulLife2023: "60",
      residualRate2023: "-",
      depreciationRate2023: "20%",
      usefulLife2022: "60",
      residualRate2022: "-",
      depreciationRate2022: "20%",
    },
    {
      category: "Office Equipment",
      usefulLife2023: "48",
      residualRate2023: "-",
      depreciationRate2023: "25%",
      usefulLife2022: "48",
      residualRate2022: "-",
      depreciationRate2022: "25%",
    },
    {
      category: "Machinery & Tool",
      usefulLife2023: "48",
      residualRate2023: "-",
      depreciationRate2023: "25%",
      usefulLife2022: "48",
      residualRate2022: "-",
      depreciationRate2022: "25%",
    },
  ]

  const usefulLifeAssets = [
    {
      asset: "Leasehold Improvement",
      usefulLifeMonth: "31-120",
      usefulLife: "31-120",
      agreeWithBook: "Yes",
    },
    {
      asset: "Motor Vehicle",
      usefulLifeMonth: "40-120",
      usefulLife: "40-120",
      agreeWithBook: "Yes",
    },
    {
      asset: "Fixture & Furniture",
      usefulLifeMonth: "60",
      usefulLife: "60",
      agreeWithBook: "Yes",
    },
    {
      asset: "Office Equipment",
      usefulLifeMonth: "48",
      usefulLife: "48",
      agreeWithBook: "Yes",
    },
    {
      asset: "Machinery & Tool",
      usefulLifeMonth: "48",
      usefulLife: "48",
      agreeWithBook: "Yes",
    },
  ]

  const analyticsAssets = [
    {
      category: "Leasehold Improvement",
      closingBalance2023: "628,038.00",
      actualDepreciation2023: "49,319.39",
      percentDepreciation2023: "7.85%",
      closingBalance2022: "628,038.00",
      actualDepreciation2022: "49,319.39",
      percentDepreciation2022: "7.85%",
      flux: "0.00%",
      notes: true,
    },
    {
      category: "Motor Vehicle",
      closingBalance2023: "2,764,379.20",
      actualDepreciation2023: "137,831.46",
      percentDepreciation2023: "4.99%",
      closingBalance2022: "2,224,379.20",
      actualDepreciation2022: "117,831.46",
      percentDepreciation2022: "5.30%",
      flux: "-0.31%",
      notes: false,
    },
    {
      category: "Fixture & Furniture",
      closingBalance2023: "618,989.24",
      actualDepreciation2023: "12,589.12",
      percentDepreciation2023: "2.03%",
      closingBalance2022: "618,989.24",
      actualDepreciation2022: "12,589.12",
      percentDepreciation2022: "2.03%",
      flux: "0.00%",
      notes: true,
    },
    {
      category: "Office Equipment",
      closingBalance2023: "1,498,254.35",
      actualDepreciation2023: "127,114.39",
      percentDepreciation2023: "8.48%",
      closingBalance2022: "1,228,254.35",
      actualDepreciation2022: "107,114.39",
      percentDepreciation2022: "8.72%",
      flux: "-0.24%",
      notes: false,
    },
    {
      category: "Machinery & Tool",
      closingBalance2023: "2,089,514.70",
      actualDepreciation2023: "261,189.34",
      percentDepreciation2023: "12.50%",
      closingBalance2022: "2,089,514.70",
      actualDepreciation2022: "261,189.34",
      percentDepreciation2022: "12.50%",
      flux: "0.00%",
      notes: false,
    },
  ]

  const analyticsTotal = {
    closingBalance2023: "7,599,175.49",
    actualDepreciation2023: "588,043.70",
    percentDepreciation2023: "7.74%",
    closingBalance2022: "6,789,175.49",
    actualDepreciation2022: "548,043.70",
    percentDepreciation2022: "8.07%",
    flux: "-0.33%",
  }

  // New data for Depreciation Allocation
  const monthlyAllocations = [
    {
      month: "January",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "February",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "March",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "April",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "May",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "June",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "July",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "August",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "September",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "October",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "November",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
    {
      month: "December",
      overhead: "",
      selling: "",
      gAndA: "",
      rAndD: "",
      total: "-",
      overheadPercent: "0.00%",
      sellingPercent: "0.00%",
      gAndAPercent: "0.00%",
      rAndDPercent: "0.00%",
    },
  ]

  const allocationTotal = {
    overhead: "",
    selling: "",
    gAndA: "",
    rAndD: "",
    total: "-",
    overheadPercent: "0.00%",
    sellingPercent: "0.00%",
    gAndAPercent: "0.00%",
    rAndDPercent: "0.00%",
  }

  // New data for Recalculation of Depreciation
  const recalculationItems = [
    {
      category: "Leasehold improvement",
      closingBalance: "628,038.00",
      expectedDepreciation: "49,319.39",
      actualDepreciation: "49,319.39",
      difference: "-",
      result: "N/A",
      expectedAccumulated: "49,319.39",
      actualAccumulated: "49,319.39",
      differenceAccumulated: "-",
      resultAccumulated: "N/A",
      notes: true,
    },
    {
      category: "Motor Vehicle",
      closingBalance: "2,764,379.20",
      expectedDepreciation: "137,831.46",
      actualDepreciation: "137,831.46",
      difference: "-",
      result: "N/A",
      expectedAccumulated: "137,831.46",
      actualAccumulated: "137,831.46",
      differenceAccumulated: "-",
      resultAccumulated: "N/A",
      notes: false,
    },
    {
      category: "Fixture & Furniture",
      closingBalance: "618,989.24",
      expectedDepreciation: "12,589.12",
      actualDepreciation: "12,589.12",
      difference: "-",
      result: "N/A",
      expectedAccumulated: "12,589.12",
      actualAccumulated: "12,589.12",
      differenceAccumulated: "-",
      resultAccumulated: "N/A",
      notes: true,
    },
    {
      category: "Office Equipment",
      closingBalance: "1,498,254.35",
      expectedDepreciation: "136,724.71",
      actualDepreciation: "127,114.39",
      difference: "(9,610.32)",
      result: "Immaterial",
      expectedAccumulated: "136,724.71",
      actualAccumulated: "127,114.39",
      differenceAccumulated: "(9,610.32)",
      resultAccumulated: "Immaterial",
      notes: false,
    },
    {
      category: "Machinery & Tool",
      closingBalance: "2,089,514.70",
      expectedDepreciation: "261,189.34",
      actualDepreciation: "261,189.34",
      difference: "(0.00)",
      result: "N/A",
      expectedAccumulated: "261,189.34",
      actualAccumulated: "261,189.34",
      differenceAccumulated: "(0.00)",
      resultAccumulated: "N/A",
      notes: false,
    },
  ]

  const recalculationTotal = {
    closingBalance: "7,599,175.49",
    expectedDepreciation: "597,654.02",
    actualDepreciation: "588,043.70",
    difference: "(9,610.32)",
    result: "Immaterial",
    expectedAccumulated: "597,654.02",
    actualAccumulated: "588,043.70",
    differenceAccumulated: "(9,610.32)",
    resultAccumulated: "Immaterial",
  }

  return (
    <div class="w-[1290px] h-[2350px] p-[16px] gap-[15px] ">
    <div class="mx-auto p-4 space-y-4 ">
      <div class="border border-[#C0C0C0] w-[1258px] h-[272px] rounded-lg p-4 bg-white shadow-lg">
      <div class="w-full ">
        <div class="flex justify-between items-center gap-[20px] mb-2">
          <div class="flex items-center space-x-2">

            <h1 class="font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333]">Depreciation Summary</h1>
            <button class="text-gray-400 hover:text-gray-500">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30387 12.1266C6.85588 12.1363 7.29555 12.5916 7.28608 13.1436L7.2857 13.1661C7.27622 13.7185 6.8205 14.1586 6.26806 14.1488L1.33262 14.061C0.780641 14.0512 0.341046 13.5959 0.35055 13.0439L0.438141 7.95705C0.447571 7.40934 0.89955 6.97317 1.44724 6.98323C1.99405 6.99327 2.42936 7.44436 2.41995 7.99117L2.37456 10.6265L10.1966 2.91728L7.69617 2.87321C7.14416 2.86348 6.70447 2.40824 6.71394 1.85622L6.71432 1.83374C6.7238 1.28129 7.17951 0.841222 7.73196 0.851048L12.6674 0.93884C13.2194 0.948658 13.659 1.40392 13.6495 1.9559L13.5619 7.0428C13.5524 7.5905 13.1005 8.02667 12.5528 8.01661C12.006 8.00656 11.5707 7.55547 11.5801 7.00865L11.6264 4.31978L3.7509 12.0815L6.30387 12.1266Z" fill="#4F4F4F"/>
            </svg>
            </button>
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
          <button class="ml-2 bg-[#8A2BE2] text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
              View Team
          </button>
          </div>
     </div>
          </div>
          <div class="-mx-4">
          <hr class="border-t border-[#C0C0C0] "/>
          </div>
          <div class="my-4 "> 
          <ConclusionsTable  />
          </div>
        </div>

        <div class="space-y-4">
         
        <div class="border border-[#C0C0C0] rounded-lg p-4 bg-white shadow-lg w-[1258px] h-[312px]">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333] mb-2">Depreciation Policy</h2>
          <DepreciationPolicyTable assets={depreciationPolicyAssets} />
        </div>
        <div class="w-[1258px] h-[284px] border border-[#C0C0C0] rounded-lg p-4 bg-white shadow-lg">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333] mb-2">Review of Useful Life</h2>
          <UsefulLifeTable assets={usefulLifeAssets} />
          </div>
          <div class="w-[1258px] h-[362px] border border-[#C0C0C0] rounded-lg p-4 bg-white shadow-lg">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333] mb-2">Analytics</h2>
          <AnalyticsTable assets={analyticsAssets} total={analyticsTotal} />
          </div>
          <div class="w-[1258px] h-[546px] border border-[#C0C0C0] rounded-lg p-4  bg-white shadow-lg">
          <h2 class="w-[1218px] h-[24px] font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333] mb-2">Depreciation Allocation</h2>
          <DepreciationAllocationTable monthlyAllocations={monthlyAllocations} totalRow={allocationTotal} />
          </div>
          <div class="w-[1258px] h-[400px] border border-[#C0C0C0] rounded-lg p-4 bg-white shadow-lg">
          <h2 class="font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333]">Recalculation of Depreciation</h2>
          <h3 class="font-inter font-semibold text-base leading-[150%] tracking-[0%] text-[#333333] mb-2">Summary by Category</h3>
          <RecalculationTable items={recalculationItems} total={recalculationTotal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepreciationSummary
