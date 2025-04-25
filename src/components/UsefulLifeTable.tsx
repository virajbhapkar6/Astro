import { For } from "solid-js"
import type { Component } from "solid-js"

type AssetLifeItem = {
  asset: string
  usefulLifeMonth: string
  usefulLife: string
  agreeWithBook: string
}

type UsefulLifeTableProps = {
  assets: AssetLifeItem[]
}

const UsefulLifeTable: Component<UsefulLifeTableProps> = (props) => {
  return (
    <div class="w-[1218px] h-[198px] rounded-lg">
      <table class="min-w-full divide-y divide-gray-200 rounded-lg border border-[#C0C0C0] border-separate border-spacing-0 shadow-lg">
        <thead class="bg-[#F3F4F6]">
          <tr class="bg-gray-50">
            <th scope="col" class="w-[279px] h-[20px] p-[4px] border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] bg-[#FFFFFF] rounded-tl-lg">
              &nbsp;
            </th>
            <th scope="col" class="w-[278px] h-[20px] p-[4px] border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] bg-[#FFFFFF]">
              &nbsp;
            </th>
            <th
              scope="col"
              colspan="3"
              class="w-[664px] h-[20px] p-[4px] text-center font-inter font-semibold text-[12px] leading-[150%] tracking-[0%] text-[#F9FAFB] border border-[#C0C0C0] bg-[#777695] rounded-tr-lg"
            >
              Depreciation policy of the company
            </th>
          </tr>
          <tr>
            <th scope="col" class="w-[279px] h-[30px] p-[4px] border border-[#C0C0C0] text-left font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Fixed assets
            </th>
            <th scope="col" class="w-[278px] h-[30px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Useful life (Month)
            </th>
            <th scope="col" class="w-[278px] h-[30px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Useful life
            </th>
            <th scope="col" class="w-[387px] h-[30px] p-[4px] border border-[#C0C0C0] text-center font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
              Agree with the book record?
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 border border-[#C0C0C0]">
          <For each={props.assets}>
            {(asset, index) => {
              const isLast = index() === props.assets.length - 1
              return (
                <tr>
                  <td class={`w-[279px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] ${isLast ? 'rounded-bl-lg border-b border-[#C0C0C0]' : ''}`}>
                    {asset.asset}
                  </td>
                  <td class="w-[279px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] text-center">
                    {asset.usefulLifeMonth}
                  </td>
                  <td class="w-[278px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] text-center">
                    {asset.usefulLife}
                  </td>
                  <td class={`w-[387px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] text-center ${isLast ? 'rounded-br-lg border-b border-[#C0C0C0]' : ''}`}>
                    {asset.agreeWithBook}
                  </td>
                </tr>
              )
            }}
          </For>
        </tbody>
      </table>
    </div>
  )
}

export default UsefulLifeTable
