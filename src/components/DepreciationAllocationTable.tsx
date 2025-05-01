import { createSignal, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"
import type { MonthlyAllocation, DepreciationAllocationData } from "../types/depreciation-allocation"

interface DepreciationAllocationTableProps {
  allocationData: DepreciationAllocationData | null;
}

export default function DepreciationAllocationTable(props: DepreciationAllocationTableProps) {
  const [data] = createSignal(props.allocationData?.monthlyAllocations ?? [])
  const [total] = createSignal(props.allocationData?.totalRow ?? null)
  const [headers] = createSignal(props.allocationData?.headers ?? { mainHeader: [], subHeader: [] })

  const columns = [
    {
      accessorKey: "month",
      header: "Month",
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px]  whitespace-nowrap text-center font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 font-['Inter'] bg-purple-80 border-r border-gray-400 border-b border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "overhead",
      header: "Overhead",
      cell: (info) => info.getValue(),
      meta: {
        className: () => "p-[4px]  whitespace-nowrap text-sm text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "selling",
      header: "Selling",
      cell: (info) => info.getValue(),
      meta: {
        className: () => "p-[4px]  whitespace-nowrap text-sm text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "gAndA",
      header: "G&A",
      cell: (info) => info.getValue(),
      meta: {
        className: () => "p-[4px]  whitespace-nowrap text-sm text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "rAndD",
      header: "R&D",
      cell: (info) => info.getValue(),
      meta: {
        className: () => "p-[4px]  whitespace-nowrap text-sm text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px]  whitespace-nowrap font-inter font-bold text-sm leading-[150%] tracking-[0%] text-gray-800 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 ",
      },
    },
    {
      accessorKey: "overheadPercent",
      header: "Overhead %",
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px]  whitespace-nowrap font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "sellingPercent",
      header: "Selling %",
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px]  whitespace-nowrap font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "gAndAPercent",
      header: "G&A %",
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px]  whitespace-nowrap font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
    {
      accessorKey: "rAndDPercent",
      header: "R&D %",
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px]  whitespace-nowrap font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700 text-right border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
  ] as ColumnDef<MonthlyAllocation>[]

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const ArrowIcon = () => (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.66769 3.74992C6.49111 3.74988 6.32177 3.68401 6.19693 3.56679L4.00424 1.50864L1.81156 3.56679C1.75013 3.62648 1.67666 3.6741 1.59542 3.70685C1.51418 3.73961 1.42681 3.75685 1.3384 3.75757C1.24998 3.75829 1.1623 3.74248 1.08047 3.71105C0.998639 3.67963 0.924294 3.63322 0.861775 3.57454C0.799255 3.51585 0.749813 3.44607 0.716332 3.36926C0.682852 3.29245 0.666005 3.21015 0.666773 3.12716C0.667541 3.04417 0.68591 2.96216 0.720807 2.8859C0.755705 2.80965 0.806432 2.74068 0.870028 2.68303L3.53348 0.182994C3.65835 0.0658231 3.82768 0 4.00424 0C4.18081 0 4.35014 0.0658231 4.47501 0.182994L7.13846 2.68303C7.23155 2.77044 7.29495 2.88179 7.32063 3.00301C7.34631 3.12423 7.33312 3.24988 7.28274 3.36407C7.23235 3.47826 7.14703 3.57586 7.03755 3.64454C6.92808 3.71322 6.79937 3.74989 6.66769 3.74992Z"
        fill="#4F4F4F"
      />
      <path
        d="M4.00424 10C3.82766 9.99996 3.65832 9.93409 3.53348 9.81687L0.870028 7.31684C0.806432 7.25918 0.755705 7.19022 0.720807 7.11396C0.68591 7.03771 0.667541 6.9557 0.666773 6.87271C0.666005 6.78972 0.682852 6.70742 0.716332 6.63061C0.749813 6.5538 0.799255 6.48401 0.861775 6.42533C0.924294 6.36665 0.998639 6.32024 1.08047 6.28881C1.1623 6.25739 1.24998 6.24157 1.3384 6.24229C1.42681 6.24301 1.51418 6.26026 1.59542 6.29301C1.67666 6.32577 1.75013 6.37338 1.81156 6.43308L4.00424 8.49123L6.19693 6.43308C6.32251 6.31923 6.49071 6.25623 6.6653 6.25765C6.83988 6.25908 7.00689 6.32481 7.13035 6.44069C7.2538 6.55657 7.32383 6.71333 7.32535 6.87721C7.32687 7.04108 7.25975 7.19896 7.13846 7.31684L4.47501 9.81687C4.35016 9.93409 4.18083 9.99996 4.00424 10Z"
        fill="#4F4F4F"
      />
    </svg>
  )

  return (
    <div class="w-[1218px]">
      {/* Table container with overflow-hidden */}
      <div class="w-full border border-gray-400 rounded-lg shadow-lg overflow-hidden">
        <table class="min-w-full border-collapse">
          <thead class="bg-[#F3F4F6]">
            <tr>
              <For each={headers().mainHeader}>
                {(header, index) => (
                  <th scope="col" colSpan={header.colSpan} rowSpan={header.rowSpan} class={header.className}>
                    {header.hasArrow ? (
                      <div class="flex justify-center items-center gap-2">
                        <span>{header.text}</span>
                        <ArrowIcon />
                      </div>
                    ) : (
                      header.text
                    )}
                  </th>
                )}
              </For>
            </tr>
            <tr class="bg-[#F3F4F6]">
              <For each={headers().subHeader}>
                {(header, index) => (
                  <th scope="col" class={header.className}>
                    {header.hasArrow ? (
                      <div class="flex justify-center items-center gap-1">
                        <span>{header.text}</span>
                        <ArrowIcon />
                      </div>
                    ) : (
                      header.text
                    )}
                  </th>
                )}
              </For>
            </tr>
          </thead>
          <tbody class="bg-[#FFFFFF]">
            <For each={table.getRowModel().rows}>
              {(row, rowIndex) => (
                <tr>
                  <For each={row.getVisibleCells()}>
                    {(cell, cellIndex) => {
                      const meta = cell.column.columnDef.meta as any
                      const className = meta?.className ? meta.className() : ""

                      return <td class={className}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    }}
                  </For>
                </tr>
              )}
            </For>
            {total() && (
              <tr class="bg-[#F3F4F6] font-medium  border-t border-gray-400">
                <td class="p-[4px] border-r border-gray-400   border-t border-gray-400 whitespace-nowrap text-sm font-medium text-center text-gray-300 bg-[#777695] rounded-bl-lg">
                  Total
                </td>
                <td class="p-[4px] border-r border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-sm font-medium text-gray-700 text-right">
                  {total()?.overhead}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-sm font-medium text-gray-700 text-right">
                  {total()?.selling}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-sm font-medium text-gray-700 text-right">
                  {total()?.gAndA}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-sm font-medium text-gray-700 text-right">
                  {total()?.rAndD}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap font-inter font-bold text-sm leading-[150%] tracking-[0%] text-[#FFFFFF] text-right bg-[#777695]">
                  {total()?.total}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap font-inter font-bold text-sm leading-[150%] tracking-[0%] text-gray-700 text-right">
                  {total()?.overheadPercent}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap font-inter font-bold text-sm leading-[150%] tracking-[0%] text-gray-700 text-right">
                  {total()?.sellingPercent}
                </td>
                <td class="p-[4px] border-r border-gray-400  border-l border-gray-400 border-t border-gray-400 whitespace-nowrap font-inter font-bold text-sm leading-[150%] tracking-[0%] text-gray-700 text-right">
                  {total()?.gAndAPercent}
                </td>
                <td class="p-[4px]   border-l border-gray-400 border-t border-gray-400 whitespace-nowrap font-inter font-bold text-sm leading-[150%] tracking-[0%] text-gray-700 text-right rounded-br-lg">
                  {total()?.rAndDPercent}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Separate GL labels section */}
      <div class="flex mt-2">
        <div class="w-[116px]"></div> {/* Spacer for alignment */}
        <div class="w-[124.38px] text-center text-[#CB4E4E] font-inter font-extrabold text-sm leading-[150%] tracking-[0%] text-red-500">
          GL
        </div>
        <div class="w-[124.38px] text-center text-[#CB4E4E] font-inter font-extrabold text-sm leading-[150%] tracking-[0%] text-red-500">
          GL
        </div>
        <div class="w-[124.38px] text-center text-[#CB4E4E] font-inter font-extrabold text-sm leading-[150%] tracking-[0%] text-red-500">
          GL
        </div>
        <div class="w-[124.38px] text-center text-[#CB4E4E] font-inter font-extrabold text-sm leading-[150%] tracking-[0%] text-red-500">
          GL
        </div>
      </div>
    </div>
  )
}
