import { For } from "solid-js"
import type { Component } from "solid-js"

type AssetItem = {
  category: string
  usefulLife2023: string
  residualRate2023: string
  depreciationRate2023: string
  usefulLife2022: string
  residualRate2022: string
  depreciationRate2022: string
}

type DepreciationPolicyTableProps = {
  assets: AssetItem[]
}

const DepreciationPolicyTable: Component<DepreciationPolicyTableProps> = (props) => {
  return (
    <div class="rounded-lg">
      <table class="min-w-full divide-y divide-[#C0C0C0] w-[1218px] h-[213px]">
        <thead>
          <tr>
            <th
              scope="col"
              class="p-[4px] text-left text-xs font-medium text-[#F9FAFB]  border border-[#C0C0C0] bg-white"
            >
              
            </th>
            <th
              scope="col"
              colspan="3"
              class="p-[4px] text-center text-xs font-medium text-[#F9FAFB]  border border-[#C0C0C0] bg-[#777695]"
            >
              2023
             
            </th>
            <th
              scope="col"
              colspan="3"
              class="p-[4px] text-center text-xs font-medium text-[#F9FAFB]  border border-[#C0C0C0] bg-[#777695]"
            >
              2022
              
            </th>
          </tr>
          <tr>
          <th
              scope="col"
              class="p-[4px] text-left text-xs font-medium text-[#F9FAFB]  border border-[#C0C0C0]"
            >
            
            </th>
          <th
              scope="col"
              colspan="3"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#E6E6FA]"
            > Straight-line method</th>
            <th
              scope="col"
              colspan="3"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#E6E6FA]"
            > Straight-line method</th>
          </tr>
          <tr>
            <th
              scope="col"
              class="p-[4px] text-left text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Depreciation Policy
            </th>
            <th
              scope="col"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Useful life (Month)
            </th>
            <th
              scope="col"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Residual value rate
            </th>
            <th
              scope="col"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Depreciation rate
            </th>
            <th
              scope="col"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Useful life (Month)
            </th>
            <th
              scope="col"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Residual value rate
            </th>
            <th
              scope="col"
              class="p-[4px] text-center text-xs font-medium text-[#4F4F4F]  border border-[#C0C0C0] bg-[#F3F4F6]"
            >
              Depreciation rate
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-[#C0C0C0]">
          <For each={props.assets}>
            {(asset) => (
              <tr>
                <td class="p-[4px] whitespace-nowrap text-sm font-medium text-[#4F4F4F] border border-[#C0C0C0] bg-[#F3F4F6]">
                  {asset.category}
                </td>
                <td class="p-[4px] whitespace-nowrap text-center text-sm text-[#4F4F4F] border border-[#C0C0C0]">
                  {asset.usefulLife2023}
                </td>
                <td class="p-[4px] whitespace-nowrap text-center text-right text-sm text-{#4F4F4F} border border-[#C0C0C0]">
                  {asset.residualRate2023}
                </td>
                <td class="p-[4px] whitespace-nowrap text-center text-sm text-[#4F4F4F] border border-[#C0C0C0]">
                  {asset.depreciationRate2023}
                </td>
                <td class="p-[4px] whitespace-nowrap text-center text-sm text-[#4F4F4F] border border-[#C0C0C0]">
                  {asset.usefulLife2022}
                </td>
                <td class="p-[4px] whitespace-nowrap text-right text-sm text-[#4F4F4F] border border-[#C0C0C0]">
                  {asset.residualRate2022}
                </td>
                <td class="p-[4px] whitespace-nowrap text-center text-sm text-[#4F4F4F] border border-[#C0C0C0]">
                  {asset.depreciationRate2022}
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  )
}

export default DepreciationPolicyTable
