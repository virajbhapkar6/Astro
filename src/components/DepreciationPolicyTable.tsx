import { createSignal, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"
import type { AssetItem, DepreciationPolicyData } from "../types/depreciation-policy"

interface DepreciationPolicyTableProps {
  policyData: DepreciationPolicyData | null;
}

export default function DepreciationPolicyTable(props: DepreciationPolicyTableProps) {
  const [data] = createSignal(props.policyData?.assets ?? [])
  const [headers] = createSignal(props.policyData?.headers ?? { mainHeader: [], methodHeader: [], subHeader: [] })

  const columns = [
    {
      accessorKey: "category",
      header: () => headers().subHeader[0].text,
      cell: (info) => info.getValue(),
      meta: {
        className: (index: number, isLast: boolean) =>
          `p-[4px] border-r border-gray-400  border-t border-gray-400 whitespace-nowrap font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700 bg-gray-100 ${isLast ? "rounded-bl-lg" : ""}`,
      },
    },
    {
      accessorKey: "usefulLife2023",
      header: () => headers().subHeader[1].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700",
      },
    },
    {
      accessorKey: "residualRate2023",
      header: () => headers().subHeader[2].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-center text-right font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700",
      },
    },
    {
      accessorKey: "depreciationRate2023",
      header: () => headers().subHeader[3].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700",
      },
    },
    {
      accessorKey: "usefulLife2022",
      header: () => headers().subHeader[4].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700",
      },
    },
    {
      accessorKey: "residualRate2022",
      header: () => headers().subHeader[5].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-center text-right font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700",
      },
    },
    {
      accessorKey: "depreciationRate2022",
      header: () => headers().subHeader[6].text,
      cell: (info) => info.getValue(),
      meta: {
        className: (index: number, isLast: boolean) =>
          `p-[4px]  border-b border-gray-400 border-l border-gray-400 border-t border-gray-400 whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-gray-700 ${isLast ? "rounded-br-lg" : ""}`,
      },
    },
  ] as ColumnDef<AssetItem>[]

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div class="overflow-hidden border border-gray-400 rounded-lg shadow-lg">
      <table class="min-w-full border-collapse w-[1218px] h-[213px] rounded-lg">
        <thead>
          <tr>
            <For each={headers().mainHeader}>
              {(header, index) => (
                <th scope="col" colSpan={header.colSpan} class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
          <tr>
            <For each={headers().methodHeader}>
              {(header, index) => (
                <th scope="col" colSpan={header.colSpan} class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
          <tr>
            <For each={headers().subHeader}>
              {(header, index) => (
                <th scope="col" class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody class="bg-white  p-2">
          <For each={table.getRowModel().rows}>
            {(row, rowIndex) => (
              <tr>
                <For each={row.getVisibleCells()}>
                  {(cell, cellIndex) => {
                    const isLast = rowIndex() === data().length - 1
                    const meta = cell.column.columnDef.meta as any
                    const className = meta?.className ? meta.className(rowIndex(), isLast) : ""

                    return <td class={className}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  }}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  )
}
