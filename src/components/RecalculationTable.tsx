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
    <div class="overflow-hidden border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category of assets
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Closing balance in original cost
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              Depreciation in the current period
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Result
            </th>
            <th
              scope="col"
              colspan="3"
              class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              Depreciation in the current period
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Result
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Notes
            </th>
          </tr>
          <tr class="bg-gray-50">
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expected depreciation expense
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actual depreciation expense
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Difference
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expected accumulated DEPR expense
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actual accumulated DEPR
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Difference
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.items}>
            {(item) => (
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.closingBalance}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  {item.expectedDepreciation}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">{item.actualDepreciation}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">{item.difference}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">{item.result}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  {item.expectedAccumulated}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">{item.actualAccumulated}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  {item.differenceAccumulated}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">{item.resultAccumulated}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                  {item.notes && (
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
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{props.total.closingBalance}</td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.expectedDepreciation}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.actualDepreciation}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.difference}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.result}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.expectedAccumulated}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.actualAccumulated}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.differenceAccumulated}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.total.resultAccumulated}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecalculationTable
