import type { Component } from "solid-js"
import ImpairmentConclusion from "./ImpairmentConclusion"
import StatusBadge from "./StatusBadge"
import TablesContainer from "./TablesContainer"
import myImage from "../assets/Avtar1.jpg"
import myimage from "../assets/Avtar2.jpg"
import mygmage from "../assets/Avtar3.jpg"

const ImpairmentDashboard: Component = () => {
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
  return (
    <div class="w-full h-[1108px] p-[16px] bg-gray-100 shadow-lg">
      <div class="w-[1258px] h-[250px] rounded-lg p-4 bg-white shadow-lg">
        <div class="w-full ">
          <div class="flex justify-between items-center gap-[20px] mb-2">
            <div class="flex items-center space-x-2">
              <h1 class="font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333]">
                Depreciation Summary
              </h1>
              <button class="text-gray-400 hover:text-gray-500">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.30387 12.1266C6.85588 12.1363 7.29555 12.5916 7.28608 13.1436L7.2857 13.1661C7.27622 13.7185 6.8205 14.1586 6.26806 14.1488L1.33262 14.061C0.780641 14.0512 0.341046 13.5959 0.35055 13.0439L0.438141 7.95705C0.447571 7.40934 0.89955 6.97317 1.44724 6.98323C1.99405 6.99327 2.42936 7.44436 2.41995 7.99117L2.37456 10.6265L10.1966 2.91728L7.69617 2.87321C7.14416 2.86348 6.70447 2.40824 6.71394 1.85622L6.71432 1.83374C6.7238 1.28129 7.17951 0.841222 7.73196 0.851048L12.6674 0.93884C13.2194 0.948658 13.659 1.40392 13.6495 1.9559L13.5619 7.0428C13.5524 7.5905 13.1005 8.02667 12.5528 8.01661C12.006 8.00656 11.5707 7.55547 11.5801 7.00865L11.6264 4.31978L3.7509 12.0815L6.30387 12.1266Z"
                    fill="#4F4F4F"
                  />
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
                <img
                  class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                  src={myImage.src || "/placeholder.svg"}
                  alt=""
                />
                <img
                  class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                  src={myimage.src || "/placeholder.svg"}
                  alt=""
                />
                <img
                  class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                  src={mygmage.src || "/placeholder.svg"}
                  alt=""
                />
              </div>
              <button class="ml-2 bg-[#8A2BE2] text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                View Team
              </button>
            </div>
          </div>
        </div>
        <div class="-mx-4">
          <hr class="border-t border-gray-400 " />
        </div>
        <div class="my-2.5 ">
          <ImpairmentConclusion />
        </div>
      </div>
      <div class="py-2 bg-gray-100 w-full">
        <TablesContainer />
      </div>
    </div>
  )
}

export default ImpairmentDashboard
