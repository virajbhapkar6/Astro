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
    <div class="overflow-hidden border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category of assets
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              2023
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-100"
            >
              2022
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Flux
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Notes
            </th>
          </tr>
          <tr class="bg-gray-50">
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Closing balance in original cost
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actual depreciation expense
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              % of depreciation to original cost
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Closing balance in original cost
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actual depreciation expense
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              % of depreciation to original cost
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.assets}>
            {(asset) => (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.category}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.closingBalance2023}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.actualDepreciation2023}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.percentDepreciation2023}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.closingBalance2022}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.actualDepreciation2022}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.percentDepreciation2022}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{asset.flux}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {asset.notes && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </td>
              </tr>
            )}
          </For>
          <tr class="bg-gray-50 font-medium">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {props.total.closingBalance2023}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {props.total.actualDepreciation2023}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {props.total.percentDepreciation2023}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {props.total.closingBalance2022}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {props.total.actualDepreciation2022}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {props.total.percentDepreciation2022}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.flux}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AnalyticsTable
