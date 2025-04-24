import { For } from "solid-js"
import type { Component } from "solid-js"

type RecalculationItem = {
  category: string
  closingBalance: string
  expectedDepreciation: string
  actualDepreciation: string
  difference: string
  result: string
  expectedAccumulated: string
  actualAccumulated: string
  differenceAccumulated: string
  resultAccumulated: string
  notes: boolean
}

type RecalculationTableProps = {
  items: RecalculationItem[]
  total: {
    closingBalance: string
    expectedDepreciation: string
    actualDepreciation: string
    difference: string
    result: string
    expectedAccumulated: string
    actualAccumulated: string
    differenceAccumulated: string
    resultAccumulated: string
  }
}

const RecalculationTable: Component<RecalculationTableProps> = (props) => {
  return (
    <div class="overflow-x-auto">
      <table class="min-w-auto divide-y divide-gray-200">
        <thead class="bg-[#FFFFFF]">
          <tr>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
            <th
              scope="col"
              colspan="2"
              class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider bg-[#E6E6FA]"
            >
              Depreciation in the current period
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
            <th
              scope="col"
              colspan="2"
              class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider bg-[#E6E6FA]"
            >
              Depreciation in the current period
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
            &nbsp;
            </th>
          </tr>
          <tr class="bg-[#F9FAFB]">
          <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Category of assets
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Closing balance in original cost
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Expected depreciation expense
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Actual depreciation expense
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Difference
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Result
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Expected accumulated DEPR expense
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Actual accumulated DEPR
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Difference
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Result
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Notes
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.items}>
            {(item) => (
              <tr>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F]">{item.category}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F]">{item.closingBalance}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">
                  {item.expectedDepreciation}
                </td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{item.actualDepreciation}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{item.difference}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{item.result}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">
                  {item.expectedAccumulated}
                </td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{item.actualAccumulated}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">
                  {item.differenceAccumulated}
                </td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{item.resultAccumulated}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">
                  {item.notes && (
                    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_6609_10535)">
                    <path d="M4.5 9C4.5 4.58172 8.08172 1 12.5 1H18.5C22.9183 1 26.5 4.58172 26.5 9V15C26.5 19.4183 22.9183 23 18.5 23H4.5V9Z" fill="#44916F" shape-rendering="crispEdges"/>
                    <rect x="8.5" y="7.5" width="14" height="1.8" rx="0.9" fill="#F9FAFB"/>
                    <rect x="8.5" y="11.1001" width="14" height="1.8" rx="0.9" fill="#F9FAFB"/>
                    <rect x="8.5" y="14.7002" width="7" height="1.8" rx="0.9" fill="#F9FAFB"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_6609_10535" x="0.5" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6609_10535"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6609_10535" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    
                  )}
                </td>
              </tr>
            )}
          </For>
          <tr class="bg-gray-50 font-medium">
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F]">Total</td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F]">{props.total.closingBalance}</td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.expectedDepreciation}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.actualDepreciation}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.difference}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.result}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.expectedAccumulated}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.actualAccumulated}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.differenceAccumulated}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F] text-center">
              {props.total.resultAccumulated}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-[#4F4F4F]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecalculationTable
