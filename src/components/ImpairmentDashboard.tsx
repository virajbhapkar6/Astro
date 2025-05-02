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
    <div class="w-full h-full p-[16px] bg-purple-80">
      <div class="w-full h-[250px] rounded-lg p-4 bg-white shadow-lg">
        <div class="w-full">
          <div class="flex justify-between items-center gap-[20px] mb-2">
            <div class="flex items-center space-x-2">
              <h1 class="font-inter font-bold text-base leading-[150%] tracking-[0%] text-[#333333]">
                Impairment Conclusion
              </h1>
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
              <button class="ml-2 bg-purple-400 text-gray-300 px-3 py-1 rounded-md text-sm font-medium">
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
      <div class="py-2 w-full">
        <TablesContainer />
      </div>
    </div>
  )
}

export default ImpairmentDashboard
