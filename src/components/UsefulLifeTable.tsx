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
    
    <div class="overflow-hidden border border-[#C0C0C0] rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-[#F3F4F6]">
        <tr class="bg-gray-50">
            <th scope="col" class="px-6 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] uppercase tracking-wider bg-[#FFFFFF]">
              &nbsp;
            </th>
            <th scope="col" class="px-6 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[[#4F4F4F]] uppercase tracking-wider bg-[#FFFFFF]">
              &nbsp;
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-6 py-3 text-center text-xs font-medium text-[#F9FAFB] uppercase tracking-wider border border bg-[#777695]"
            > Depreciation policy of the company</th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Fixed assets
            </th>
            <th scope="col" class="px-6 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Useful life (Month)
            </th>
            <th scope="col" class="px-6 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Useful life
            </th>
            <th
              scope="col"
              class="px-6 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-[#4F4F4F] uppercase tracking-wider">
              Agree with the book record?
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.assets}>
            {(asset) => (
              <tr>
                <td class="px-6 py-4 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F]">{asset.asset}</td>
                <td class="px-6 py-4 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{asset.usefulLifeMonth}</td>
                <td class="px-6 py-4 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{asset.usefulLife}</td>
                <td class="px-6 py-4 border border-[#C0C0C0] whitespace-nowrap text-sm text-[#4F4F4F] text-center">{asset.agreeWithBook}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  )
}

export default UsefulLifeTable