import { createSignal, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"
import type { Conclusion, ConclusionsTableData } from "../types/conclusions"
import IconBadge from "./IconBadge"

interface ConclusionsTableProps {
  conclusionsData: ConclusionsTableData | null;
}

export default function ConclusionsTable(props: ConclusionsTableProps) {
  const [data] = createSignal(props.conclusionsData?.conclusions ?? [])
  const [headers] = createSignal(props.conclusionsData?.headers ?? [])

  const renderReviewBadge = (value: string) => {
    if (value === "RT") {
      return <IconBadge type="RT" className="pr-2.3 pl-1" />
    } else if (value === "SH") {
      return <IconBadge type="SH" className="pr-1.4" />
    }
    return null
  }

  const columns = [
    {
      accessorKey: "text",
      header: () => headers()[0]?.text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "px-2 py-1.5 font-inter font-normal text-xs leading-[150%] tracking-[0%] text-gray-700 align-middle border-r border-gray-400 border-b border-gray-400  border-t border-gray-400",
      },
    },
    {
      accessorKey: "preparation",
      header: () => headers()[1]?.text,
      cell: (info) => {
        const value = info.getValue() as string
        if (value === "MC") {
          return <IconBadge type="MC" className="pr-0.5 pl-2.5" />
        }
        return null
      },
      meta: {
        className: () => "px-2 py-1.5 border-b border-gray-400 border-l border-gray-400 ",
      },
    },
    {
      accessorKey: "review",
      header: () => headers()[2]?.text ,
      cell: (info) => {
        const value = info.getValue()
        if (Array.isArray(value)) {
          // For the first row with both RT and SH, position RT on left and SH on right
          return (
            <div class="flex justify-end gap-1">
              <div class="flex-shrink-0">{value.includes("RT") && renderReviewBadge("RT")}</div>
              <div class="flex-shrink-0">{value.includes("SH") && renderReviewBadge("SH")}</div>
            </div>
          )
        } else if (typeof value === "string" && value) {
          return <div class="flex justify-end">{renderReviewBadge(value)}</div>
        }
        return null
      },
      meta: {
        className: () => "w-[15px] px-2 py-1.5  border-b border-gray-400 border-l border-gray-400",
      },
    },
    {
      accessorKey: "actions",
      header: () => "",
      cell: () => (
        <div class="px-3 py-1.5 text-right">
          <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
              fill="#4F4F4F"
            />
          </svg>
        </div>
      ),
      meta: {
        className: () => "px-3 py-1.5 text-right border-r border-gray-400 border-b border-gray-400 border-l border-gray-400 border-t border-gray-400",
      },
    },
  ] as ColumnDef<Conclusion>[]

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div class="w-[1215px] h-[165px] overflow-hidden border border-gray-400 rounded-lg shadow-lg">
      <table class="w-[1220px] h-[140px] border-collapse text-sm text-gray-700">
        <thead>
          <tr class="bg-gray-100 text-sm text-gray-800 border-r border-gray-400 border-b border-gray-400">
            <For each={headers()}>
              {(header) => (
                <th class={header.className}>
                  {header.hasIcon ? (
                    <div class="flex justify-center items-center ">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.125 13.75H10.625"
                          stroke="#4F4F4F"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.125 8.5H18.875"
                          stroke="#4F4F4F"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    header.text
                  )}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr class="border-r border-gray-400 border-b border-gray-400 border-t border-gray-400 p-[5px]">
                <For each={row.getVisibleCells()}>
                  {(cell) => {
                    const meta = cell.column.columnDef.meta as any
                    const className = meta?.className ? meta.className() : ""

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
