import { createSignal, createEffect, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"

type AssetItem = {
  category: string
  usefulLife2023: string
  residualRate2023: string
  depreciationRate2023: string
  usefulLife2022: string
  residualRate2022: string
  depreciationRate2022: string
}

type HeaderItem = {
  text: string
  colSpan?: number
  className: string
}

export default function DepreciationPolicyTable() {
  const [data, setData] = createSignal<AssetItem[]>([])
  const [headers, setHeaders] = createSignal<{
    mainHeader: HeaderItem[]
    methodHeader: HeaderItem[]
    subHeader: HeaderItem[]
  }>({ mainHeader: [], methodHeader: [], subHeader: [] })
  const [loading, setLoading] = createSignal(true)

  createEffect(async () => {
    try {
      const response = await fetch("/src/data/depreciation-policy.json")
      const jsonData = await response.json()
      setData(jsonData.assets)
      setHeaders(jsonData.headers)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching depreciation policy data:", error)
      setLoading(false)
    }
  })

  const columns = [
    {
      accessorKey: "category",
      header: () => headers().subHeader[0].text,
      cell: (info) => info.getValue(),
      meta: {
        className: (index: number, isLast: boolean) =>
          `p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F] bg-[#F3F4F6] ${isLast ? "rounded-bl-lg" : ""}`,
      },
    },
    {
      accessorKey: "usefulLife2023",
      header: () => headers().subHeader[1].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "residualRate2023",
      header: () => headers().subHeader[2].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center text-right font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "depreciationRate2023",
      header: () => headers().subHeader[3].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "usefulLife2022",
      header: () => headers().subHeader[4].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "residualRate2022",
      header: () => headers().subHeader[5].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "depreciationRate2022",
      header: () => headers().subHeader[6].text,
      cell: (info) => info.getValue(),
      meta: {
        className: (index: number, isLast: boolean) =>
          `p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-sm leading-[150%] tracking-[0%] text-[#4F4F4F] ${isLast ? "rounded-br-lg" : ""}`,
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
    <div class="overflow-hidden rounded-lg shadow-lg">
      <table class="min-w-full divide-y divide-[#C0C0C0] w-[1218px] h-[213px] rounded-lg border-separate border-spacing-0">
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
        <tbody class="bg-white divide-y divide-gray-200 p-2">
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
