import { createSignal, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"
import type { AssetLifeItem, UsefulLifeData } from "../types/useful-life"

interface UsefulLifeTableProps {
  usefulLifeData: UsefulLifeData | null;
}

export default function UsefulLifeTable(props: UsefulLifeTableProps) {
  const [data] = createSignal(props.usefulLifeData?.assets ?? [])
  const [headers] = createSignal(props.usefulLifeData?.headers ?? { mainHeader: [], subHeader: [] })

  const columns = [
    {
      accessorKey: "asset",
      header: () => headers().subHeader[0].text,
      cell: (info) => info.getValue(),
      meta: {
        className: (index: number, isLast: boolean) =>
          `w-[279px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] ${
            isLast ? "rounded-bl-lg border-b border-[#C0C0C0]" : ""
          }`,
      },
    },
    {
      accessorKey: "usefulLifeMonth",
      header: () => headers().subHeader[1].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[279px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] text-center",
      },
    },
    {
      accessorKey: "usefulLife",
      header: () => headers().subHeader[2].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[278px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] text-center",
      },
    },
    {
      accessorKey: "agreeWithBook",
      header: () => headers().subHeader[3].text,
      cell: (info) => info.getValue(),
      meta: {
        className: (index: number, isLast: boolean) =>
          `w-[387px] h-[30px] p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] text-center ${
            isLast ? "rounded-br-lg border-b border-[#C0C0C0]" : ""
          }`,
      },
    },
  ] as ColumnDef<AssetLifeItem>[]

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div class="w-[1218px] h-[198px] rounded-lg">
      <table class="min-w-full divide-y divide-gray-200 rounded-lg border border-[#C0C0C0] border-separate border-spacing-0 shadow-lg">
        <thead class="bg-[#F3F4F6]">
          <tr class="bg-gray-50">
            <For each={headers().mainHeader}>
              {(header) => (
                <th scope="col" colSpan={header.colSpan} class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
          <tr>
            <For each={headers().subHeader}>
              {(header) => (
                <th scope="col" class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 border border-[#C0C0C0]">
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
