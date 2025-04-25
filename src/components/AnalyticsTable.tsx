import { For } from "solid-js"
import type { Component } from "solid-js"

type AssetAnalyticsItem = {
  category: string
  closingBalance2023: string
  actualDepreciation2023: string
  percentDepreciation2023: string
  closingBalance2022: string
  actualDepreciation2022: string
  percentDepreciation2022: string
  flux: string
  notes: boolean
}

type AnalyticsTableProps = {
  assets: AssetAnalyticsItem[]
  total: {
    closingBalance2023: string
    actualDepreciation2023: string
    percentDepreciation2023: string
    closingBalance2022: string
    actualDepreciation2022: string
    percentDepreciation2022: string
    flux: string
  }
}

const AnalyticsTable: Component<AnalyticsTableProps> = (props) => {
  return (
    <div class="rounded-lg shadow-lg">
      <table class="min-w-full divide-y divide-gray-200 w-[1218px] h-[237px] border-separate border-spacing-0 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="w-[188px] h-[20px] border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] bg-[#FFFFFF] rounded-tl-lg"
            >
              &nbsp;
            </th>
            <th
              scope="col"
              colspan="3"
              class="w-[442.5px] h-[20px] border border-[#C0C0C0] text-center font-inter font-semibold text-[12px] leading-[150%] tracking-[0%] text-[#F9FAFB] bg-[#777695]"
            >
              2023
            </th>
            <th
              scope="col"
              colspan="3"
              class="w-[442.5px] h-[20px] border border-[#C0C0C0] text-center font-inter font-semibold text-[12px] leading-[150%] tracking-[0%] text-[#F9FAFB] bg-[#777695] "
            >
              2022
            </th>
            <th
              scope="col"
              class="border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] bg-[#FFFFFF]"
            >
              &nbsp;
            </th>
            <th
              scope="col"
              class="border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] bg-[#FFFFFF] rounded-tr-lg"
            >
              &nbsp;
            </th>
          </tr>
          <tr class="bg-[#F9FAFB]">
            <th class="w-[188.35px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Category of assets
            </th>
            <th class="w-[164.78px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Closing balance in original cost
            </th>
            <th class="w-[146.09px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Actual depreciation expense
            </th>
            <th class="w-[134.48px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              % of depreciation to original cost
            </th>
            <th class="w-[164.56px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Closing balance in original cost
            </th>
            <th class="w-[145.29px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Actual depreciation expense
            </th>
            <th class="w-[134.58px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              % of depreciation to original cost
            </th>
            <th class="w-[87.82px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Flux
            </th>
            <th class="w-[62px] h-[80px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Notes
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 p-2">
          <For each={props.assets}>
            {(asset, index) => (
              <tr>
                <td class={`p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] `}>{asset.category}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.closingBalance2023}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.actualDepreciation2023}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.percentDepreciation2023}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.closingBalance2022}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.actualDepreciation2022}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.percentDepreciation2022}</td>
                <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{asset.flux}</td>
                <td class={`p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]`}>
                  {asset.notes && (
                    <div class="flex justify-center items-center">
                    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_6609_10523)">
                        <path d="M4 9C4 4.58172 7.58172 1 12 1H18C22.4183 1 26 4.58172 26 9V15C26 19.4183 22.4183 23 18 23H4V9Z" fill="#44916F" shape-rendering="crispEdges" />
                        <rect x="8" y="7.5" width="14" height="1.8" rx="0.9" fill="#F9FAFB" />
                        <rect x="8" y="11.1001" width="14" height="1.8" rx="0.9" fill="#F9FAFB" />
                        <rect x="8" y="14.7" width="7" height="1.8" rx="0.9" fill="#F9FAFB" />
                      </g>
                      <defs>
                        <filter id="filter0_d_6609_10523" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="3" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6609_10523" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6609_10523" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                    </div>
                  )}
                </td>
              </tr>
            )}
          </For>
          <tr class="bg-[#FFFFFF] font-medium">
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] rounded-bl-lg">Total</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.closingBalance2023}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.actualDepreciation2023}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.percentDepreciation2023}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.closingBalance2022}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.actualDepreciation2022}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.percentDepreciation2022}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">{props.total.flux}</td>
          <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] rounded-br-lg">&nbsp;</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AnalyticsTable
