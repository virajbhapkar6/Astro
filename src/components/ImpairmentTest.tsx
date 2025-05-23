"use client"

import { createSignal } from "solid-js"
import { FiSearch, FiUpload } from "solid-icons/fi"
import StatusBadge from "./StatusBadge"
import myVmage from './assets/Vector.png'

const ImpairmentTest = () => {
  const [searchTerm, setSearchTerm] = createSignal("")

  return (
    <div class="bg-white w-full h-full rounded-lg shadow-md">
      <div class="flex justify-between items-center p-4">
        <div class=" flex items-center space-x-2">
          <h2 class="w-full h-[24px] font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">
            Impairment Test
          </h2>
          <img class="w-[15px] h-[15px]" src={myVmage.src} alt="" />
          <div class="flex items-center space-x-2 ml-2 ">
                <StatusBadge status="V/A" />
                <StatusBadge status="P/D" />
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch class="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              class="pl-10 pr-4 py-2 border-gray-700 rounded-md w-64 text-sm"
              placeholder="Search by keyword"
              value={searchTerm()}
              onInput={(e) => setSearchTerm(e.currentTarget.value)}
            />
          </div>
         {/* <button class="bg-[#8A2BE2] text-white px-4 py-2 rounded-md">
            <FiUpload class="h-4 w-4 text-white" /> 
            <span class="text-white">Upload</span>
          </button> */}
 
        </div>
      </div>
    </div>
  )
}

export default ImpairmentTest
