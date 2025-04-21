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
    <div class="overflow-hidden border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Depreciation Policy
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              2023
              <br />
              Straight-line method
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-100"
            >
              2022
              <br />
              Straight-line method
            </th>
          </tr>
          <tr class="bg-gray-50">
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Useful life (Month)
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Residual value rate
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Depreciation rate
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Useful life (Month)
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Residual value rate
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Depreciation rate
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.assets}>
            {(asset) => (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.category}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.usefulLife2023}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.residualRate2023}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.depreciationRate2023}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.usefulLife2022}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.residualRate2022}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.depreciationRate2022}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  )
}

export default DepreciationPolicyTable
