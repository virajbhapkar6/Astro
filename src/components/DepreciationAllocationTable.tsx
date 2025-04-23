import { For } from "solid-js"
import type { Component } from "solid-js"

type MonthlyAllocation = {
  month: string
  overhead: string
  selling: string
  gAndA: string
  rAndD: string
  total: string
  overheadPercent: string
  sellingPercent: string
  gAndAPercent: string
  rAndDPercent: string
}

type DepreciationAllocationTableProps = {
  monthlyAllocations: MonthlyAllocation[]
  totalRow: {
    overhead: string
    selling: string
    gAndA: string
    rAndD: string
    total: string
    overheadPercent: string
    sellingPercent: string
    gAndAPercent: string
    rAndDPercent: string
  }
}

const DepreciationAllocationTable: Component<DepreciationAllocationTableProps> = (props) => {
  return (
    <div class="overflow-hidden border border-[#C0C0C0]-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expenses
            </th>
            <th
              scope="col"
              colspan="4"
              class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              Depreciation per month
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th
              scope="col"
              colspan="4"
              class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-indigo-50"
            >
              Allocation % for each category
            </th>
          </tr>
          <tr class="bg-gray-50">
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Overhead
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Selling
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              G&A
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              R&D
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Overhead
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Selling
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              G&A
            </th>
            <th scope="col" class="px-4 py-3 border border-[#C0C0C0] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              R&D
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <For each={props.monthlyAllocations}>
            {(allocation) => (
              <tr>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900">{allocation.month}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.overhead}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.selling}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.gAndA}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.rAndD}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.total}</td>
                <td class="px-4 py-3 border border-[#C0C0C0]whitespace-nowrap text-sm text-gray-500 text-center">
                  {allocation.overheadPercent}
                </td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">
                  {allocation.sellingPercent}
                </td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.gAndAPercent}</td>
                <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm text-gray-500 text-center">{allocation.rAndDPercent}</td>
              </tr>
            )}
          </For>
          <tr class="bg-indigo-100 font-medium">
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.overhead}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.selling}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.gAndA}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.rAndD}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.total}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.overheadPercent}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.sellingPercent}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.gAndAPercent}
            </td>
            <td class="px-4 py-3 border border-[#C0C0C0] whitespace-nowrap text-sm font-medium text-gray-900 text-center">
              {props.totalRow.rAndDPercent}
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-white">
          <tr>
            <td class="px-4 py-2 text-center"></td>
            <td class="px-4 py-2 text-center text-red-500 font-medium">GL</td>
            <td class="px-4 py-2 text-center text-red-500 font-medium">GL</td>
            <td class="px-4 py-2 text-center text-red-500 font-medium">GL</td>
            <td class="px-4 py-2 text-center text-red-500 font-medium">GL</td>
            <td class="px-4 py-2 text-center"></td>
            <td class="px-4 py-2 text-center"></td>
            <td class="px-4 py-2 text-center"></td>
            <td class="px-4 py-2 text-center"></td>
            <td class="px-4 py-2 text-center"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default DepreciationAllocationTable
