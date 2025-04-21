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
    <div class="overflow-hidden border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fixed assets
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Useful life (Month)
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Useful life
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              Depreciation policy of the company
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.assets}>
            {(asset) => (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.asset}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.usefulLifeMonth}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.usefulLife}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{asset.agreeWithBook}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  )
}

export default UsefulLifeTable