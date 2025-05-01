import { Search, Upload } from "lucide-solid"
import { For } from "solid-js"

export default function ImpairmentTest() {
  return (
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <div class="flex items-center gap-2">
          <h2 class="text-lg font-medium text-gray-800">Impairment Test</h2>
          <span class="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">NEW</span>
          <span class="px-2 py-0.5 bg-teal-100 text-teal-800 rounded text-xs">WIP</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by keyword"
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button class="px-4 py-2 bg-purple-600 text-white text-sm rounded-md flex items-center gap-1">
            <Upload size={16} />
            Upload
          </button>
        </div>
      </div>

      <div class="p-4">
        <h3 class="text-base font-medium text-gray-800 mb-2">Judgment of long-term asset impairment</h3>
        <p class="text-sm text-gray-600 mb-2">Table 1</p>

        <div class="border border-gray-200 rounded-md overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-3 text-left font-medium text-gray-700 w-1/3">External Indicators</th>
                <th class="px-4 py-3 text-center font-medium text-gray-700 w-1/3">Evaluation</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700 w-1/3">Judgmental basis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-200">
                <td class="px-4 py-3 text-gray-700">
                  The market value of long-term assets drops significantly, which was significantly lower than the
                  expected price in normal range.
                </td>
                <td class="px-4 py-3 text-center">
                  <div class="flex justify-center">
                    <div class="w-4 h-4 bg-red-500"></div>
                  </div>
                </td>
                <td class="px-4 py-3 text-gray-700">None noted</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="px-4 py-3 text-gray-700">
                  There is a significant adverse change in the scope or mode of use of long-term assets or their
                  material condition.
                </td>
                <td class="px-4 py-3 text-center">
                  <div class="flex justify-center">
                    <div class="w-4 h-4 bg-red-500"></div>
                  </div>
                </td>
                <td class="px-4 py-3 text-gray-700">None noted</td>
              </tr>
              <tr class="border-t border-gray-200">
                <td class="px-4 py-3 text-gray-700">
                  Major adverse changes in the technological, market, economic, or legal environment in which an entity
                  operates may affect the value of long-term assets.
                </td>
                <td class="px-4 py-3 text-center text-red-500 font-medium">N/A</td>
                <td class="px-4 py-3 text-gray-700"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <table class="w-full text-sm border border-gray-200 rounded-md overflow-hidden mb-6">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-4 py-3 text-left font-medium text-gray-700 w-1/3">Internal Indicators</th>
              <th class="px-4 py-3 text-center font-medium text-gray-700 w-1/3">Evaluation</th>
              <th class="px-4 py-3 text-left font-medium text-gray-700 w-1/3">Judgmental basis</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-3 text-gray-700">
                The operating results are significantly lower than the budget, or significantly lower than the budget in
                the subsequent period.
              </td>
              <td class="px-4 py-3 text-center">
                <div class="flex justify-center">
                  <div class="w-4 h-4 bg-red-500"></div>
                </div>
              </td>
              <td class="px-4 py-3 text-gray-700">None noted</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-3 text-gray-700">
                Cost accumulation exceeding the initial expected amount for the purchase or construction of long-term
                assets.
              </td>
              <td class="px-4 py-3 text-center">
                <div class="flex justify-center">
                  <div class="w-4 h-4 bg-red-500"></div>
                </div>
              </td>
              <td class="px-4 py-3 text-gray-700">None noted</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-3 text-gray-700">
                Loss of current operation or cash flow, and loss of previous operation or cash flow, or forecasting
                indicating continuous loss.
              </td>
              <td class="px-4 py-3 text-center text-red-500 font-medium">N/A</td>
              <td class="px-4 py-3 text-gray-700"></td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-3 text-gray-700">Assets.</td>
              <td class="px-4 py-3 text-center text-red-500 font-medium">N/A</td>
              <td class="px-4 py-3 text-gray-700"></td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-3 text-gray-700">Long-term assets are obsolete or damaged.</td>
              <td class="px-4 py-3 text-center text-red-500 font-medium">N/A</td>
              <td class="px-4 py-3 text-gray-700"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="text-base font-medium text-gray-800 mb-2">Provision for impairment calculation</h3>
        <p class="text-sm text-gray-600 mb-2">Table 2</p>

        <div class="border border-gray-200 rounded-md overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-50 text-xs">
                <th class="px-2 py-3 text-center font-medium text-gray-700">Category of fixed assets</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Code of fixed assets</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Name of fixed assets</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Capitalization start date</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Book value</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Recoverable amount</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Value in use</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Net fair value</th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">
                  Impairment to be provided for in the end of the period
                </th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">
                  Provision for impairment recognized in the end of the period
                </th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">
                  Additional impairment to be provided for the current period
                </th>
                <th class="px-2 py-3 text-center font-medium text-gray-700">Basis for impairment (reference file)</th>
              </tr>
            </thead>
            <tbody>
              <For each={Array(5).fill(0)}>
                {(_, i) => (
                  <tr class="border-t border-gray-200 text-center">
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                    <td class="px-2 py-3 text-gray-700">-</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
