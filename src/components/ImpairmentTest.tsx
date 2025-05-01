"use client"

import { createSignal } from "solid-js"
import { FiSearch, FiUpload } from "solid-icons/fi"

const ImpairmentTest = () => {
  const [searchTerm, setSearchTerm] = createSignal("")

  return (
    <div class="bg-white rounded-lg shadow-md">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="w-[1258px] h-[61px] flex items-center space-x-2">
          <h2 class="w-[128px] h-[24px] font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">Impairment Test</h2>
          <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded">V/A</span>
          <span class="bg-teal-500 text-white text-xs px-2 py-0.5 rounded">P/D</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch class="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              class="pl-10 pr-4 py-2 border rounded-md w-64 text-sm"
              placeholder="Search by keyword"
              value={searchTerm()}
              onInput={(e) => setSearchTerm(e.currentTarget.value)}
            />
          </div>
          <button class="bg-purple-600 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-1">
            <FiUpload class="h-4 w-4" />
            <span>Upload</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImpairmentTest
