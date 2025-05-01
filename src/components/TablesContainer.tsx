"use client"

import { FiAlertCircle, FiSearch, FiUpload } from "solid-icons/fi"
import { createSignal, type Component } from "solid-js"
import StatusBadge from "./StatusBadge"
import myVmage from "../assets/Vector.png"

interface Indicator {
  description: string
  evaluation: string
  judgmentalBasis: string
}

interface TableRow {
  category: string
  codeOfFixedAssets: string
  nameOfFixedAssets: string
  capitalizationStartDate: string
  bookValue: string
  recoverableAmount: string
  valueInUse: string
  netFairValue: string
  impairmentToBe: string
  provisionFor: string
  additionalImpairment: string
  basisFor: string
}

const TablesContainer: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal("")

  const externalIndicators: Indicator[] = [
    {
      description:
        "The market price of long-term assets drops significantly, which was significantly lower than the expected price in normal range",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "There is a significant adverse change in the scope or mode of use of long-term assets or their material condition",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "Major adverse changes in the technological, market, economic, or legal environment in which an entity operates may affect the value of long-term assets",
      evaluation: "N/A",
      judgmentalBasis: "",
    },
  ]

  const internalIndicators: Indicator[] = [
    {
      description:
        "The operating results are significantly lower than the budget, or significantly lower than the budget in the subsequent period",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "Cost accumulation exceeding the initial expected amount for the purchase or construction of long-term assets",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "Loss of current operation or cash flow, and loss of previous operation or cash flow, or forecasting indicating continuous loss",
      evaluation: "N/A",
      judgmentalBasis: "",
    },
    {
      description: "Assets",
      evaluation: "N/A",
      judgmentalBasis: "",
    },
    {
      description: "Long-term assets are obsolete or damaged",
      evaluation: "",
      judgmentalBasis: "",
    },
  ]

  // Empty data for the provision table rows
  const emptyRows: TableRow[] = Array(2).fill({
    category: "-",
    codeOfFixedAssets: "-",
    nameOfFixedAssets: "-",
    capitalizationStartDate: "-",
    bookValue: "-",
    recoverableAmount: "-",
    valueInUse: "-",
    netFairValue: "-",
    impairmentToBe: "-",
    provisionFor: "-",
    additionalImpairment: "-",
    basisFor: "-",
  })

  const getEvaluationBadge = (evaluation: string) => {
    if (evaluation === "N/A") {
      return (
        <div class="text-center font-inter font-extrabold text-[14px] leading-[150%] tracking-[0%] text-red-500">
          N/A
        </div>
      )
    } else if (evaluation === "i") {
      return (
        <div class="text-center font-inter font-extrabold text-[14px] leading-[150%] tracking-[0%] text-red-500">
        i
      </div>
      )
    }
    return (
      <div class="flex justify-center">
        
      </div>
    )
  }

  return (
    <div class="bg-white rounded-lg w-[1258px] shadow-md">
      {/* Impairment Test Header */}
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <div class="flex items-center space-x-2">
          <h2 class="w-[128px] h-[24px] font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">
            Impairment Test
          </h2>
          <img class="w-[15px] h-[15px]" src={myVmage.src} alt="vector" />
          <div class="flex items-center space-x-2 ml-4">
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

      {/* Judgment Table */}
      <div class="p-4">
        <h2 class="font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">
          Judgment of long-term asset impairment
        </h2>
        <h2 class="font-inter font-semibold text-[16px] leading-[150%] tracking-[0%] text-gray-700">Table 1</h2>
      </div>

      <div class="px-4 pb-4">
        <div class="rounded-lg overflow-hidden border border-gray-400">
          <table class="w-full w-[1218px] border-collapse">
            <thead>
              <tr class="bg-gray-100 text-sm">
                <th class="p-2 text-center w-1/2 w-[549px] h-[30px] font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400">
                  External Indicators
                </th>
                <th class="p-2 text-center w-1/6 w-[122px] h-[30px] font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400">
                  Evaluation
                </th>
                <th class="p-2 text-center w-1/3 w-[549px] h-[30px] font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700">
                  Judgmental basis
                </th>
              </tr>
            </thead>
            <tbody>
              {externalIndicators.map((indicator: Indicator, index: number) => (
                <tr class="border-t border-gray-400" data-key={index}>
                  <td class="p-2 font-inter font-normal w-[549px] h-[30px] text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400">
                    {indicator.description}
                  </td>
                  <td class="p-2 font-inter font-normal w-[122px] h-[30px] text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400">
                    {getEvaluationBadge(indicator.evaluation)}
                  </td>
                  <td class="p-2 font-inter font-normal w-[549px] h-[30px] text-[12px] leading-[150%] tracking-[0%] text-gray-700 text-center">
                    {indicator.judgmentalBasis}
                  </td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr class="bg-gray-100 text-sm">
                <th class="p-2 text-center w-1/2 font-inter w-[549px] h-[30px] font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400 border-t border-gray-400">
                  Internal Indicators
                </th>
                <th class="p-2 text-center w-1/6 font-inter w-[122px] h-[30px]  font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400 border-t border-gray-400">
                  Evaluation
                </th>
                <th class="p-2 text-center w-1/3 font-inter w-[549px] h-[30px]  font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-t border-gray-400">
                  Judgmental basis
                </th>
              </tr>
            </thead>
            <tbody>
              {internalIndicators.map((indicator: Indicator, index: number) => (
                <tr class="border-t border-gray-400" data-key={index}>
                  <td class="p-2 font-inter font-normal w-[549px] h-[30px] text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400">
                    {indicator.description}
                  </td>
                  <td class="p-2 font-inter font-normal w-[122px] h-[30px] text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r border-gray-400">
                    {getEvaluationBadge(indicator.evaluation)}
                  </td>
                  <td class="p-2 font-inter font-normal w-[549px] h-[30px]  text-[12px] leading-[150%] tracking-[0%] text-gray-700 text-center">
                    {indicator.judgmentalBasis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Provision Table */}
      <div class="px-4 pt-2 pb-4">
        <div class="w-[1218px] h-[48px] p-2 mb-2">
          <h2 class="font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">
            Provision for impairment calculation
          </h2>
          <h3 class="font-inter font-semibold text-[16px] leading-[150%] tracking-[0%] text-gray-700">Table 2</h3>
        </div>

        <div class="rounded-lg overflow-hidden border border-gray-400">
          <table class="w-[1218px] w-full text-sm border-collapse">
            <thead>
              <tr class="w-[64.125px] h-[54px] font-inter font-semibold text-[12px] leading-[150%] tracking-[0%] text-center text-gray-800 bg-gray-100">
                <th class="p-2 border-r border-gray-400 border-b border-gray-400 text-center rounded-tl-lg">
                  Category of fixed assets
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Code of fixed assets
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Name of fixed assets
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Capitalization start date
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Book value
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Recoverable amount
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Value in use
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Net fair value
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Impairment to be provided for in the end of the period
                </th>
                <th class="p-2 border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 text-center">
                  Provision for impairment recognized in the end of the period
                </th>
                <th class="p-2 border-r border-gray-400  border-b border-gray-400 border-l border-gray-400 text-center">
                  Additional impairment to be provided for the current period
                </th>
                <th class="p-2 border-b border-gray-400 text-center rounded-tr-lg">
                  Basis for impairment (reference file)
                </th>
              </tr>
            </thead>
            <tbody>
              {emptyRows.map((row: TableRow, index: number) => (
                <tr class="bg-white border-t border-gray-400 w-[84.125px] h-[30px] p-[10px] gap-[10px]">
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.category}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.codeOfFixedAssets}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.nameOfFixedAssets}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.capitalizationStartDate}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.bookValue}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.recoverableAmount}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.valueInUse}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.netFairValue}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.impairmentToBe}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.provisionFor}
                  </td>
                  <td class="p-2 border-r border-gray-400 text-center">
                    {row.additionalImpairment}
                  </td>
                  <td class="p-2 text-center">
                    {row.basisFor}
                  </td>
                </tr>
              ))}
              <tr class="bg-white border-t border-gray-400 w-[84.125px] h-[30px] p-[10px] gap-[10px]">
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 border-r border-gray-400 text-center">
                  -
                </td>
                <td class="p-2 text-center">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TablesContainer
