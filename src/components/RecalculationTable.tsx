import { createSignal, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"
import type { RecalculationItem, RecalculationData } from "../types/recalculation"

interface RecalculationTableProps {
  recalculationData: RecalculationData | null;
}

export default function RecalculationTable(props: RecalculationTableProps) {
  const [data] = createSignal(props.recalculationData?.items ?? [])
  const [total] = createSignal(props.recalculationData?.total ?? null)
  const [headers] = createSignal(props.recalculationData?.headers ?? { mainHeader: [], subHeader: [] })

  const columns = [
    {
      accessorKey: "category",
      header: () => headers().subHeader[0].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[149px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700",
      },
    },
    {
      accessorKey: "closingBalance",
      header: () => headers().subHeader[1].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "expectedDepreciation",
      header: () => headers().subHeader[2].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "actualDepreciation",
      header: () => headers().subHeader[3].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "difference",
      header: () => headers().subHeader[4].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "result",
      header: () => headers().subHeader[5].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "expectedAccumulated",
      header: () => headers().subHeader[6].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[104.7px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "actualAccumulated",
      header: () => headers().subHeader[7].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "differenceAccumulated",
      header: () => headers().subHeader[8].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "resultAccumulated",
      header: () => headers().subHeader[9].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "w-[114.16px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
    {
      accessorKey: "notes",
      header: () => headers().subHeader[10].text,
      cell: (info) =>
        info.getValue() ? (
          <div class="flex justify-center items-center">
            <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_6609_10535)">
                <path
                  d="M4.5 9C4.5 4.58172 8.08172 1 12.5 1H18.5C22.9183 1 26.5 4.58172 26.5 9V15C26.5 19.4183 22.9183 23 18.5 23H4.5V9Z"
                  fill="#44916F"
                  shape-rendering="crispEdges"
                />
                <rect x="8.5" y="7.5" width="14" height="1.8" rx="0.9" fill="#F9FAFB" />
                <rect x="8.5" y="11.1001" width="14" height="1.8" rx="0.9" fill="#F9FAFB" />
                <rect x="8.5" y="14.7002" width="7" height="1.8" rx="0.9" fill="#F9FAFB" />
              </g>
              <defs>
                <filter
                  id="filter0_d_6609_10535"
                  x="0.5"
                  y="0"
                  width="30"
                  height="30"
                  filterUnits="userSpaceOnUse"
                  color-InterpolationFilters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6609_10535" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6609_10535" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        ) : null,
      meta: {
        className: () =>
          "w-[61px] h-[30px] p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right",
      },
    },
  ] as ColumnDef<RecalculationItem>[]

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div class="w-[1218px] h-[293px]">
      <table class="divide-y divide-gray-200 border-separate border-spacing-0 rounded-lg shadow-lg">
        <thead class="bg-[#FFFFFF]">
          <tr>
            <For each={headers().mainHeader}>
              {(header, index) => (
                <th scope="col" colSpan={header.colSpan} class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
          <tr class="bg-[#F9FAFB]">
            <For each={headers().subHeader}>
              {(header, index) => (
                <th scope="col" class={header.className}>
                  {header.text}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
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
            <tr class="bg-gray-50 font-medium">
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 rounded-bl-lg">
                Total
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.closingBalance}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.expectedDepreciation}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.actualDepreciation}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.difference}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.result}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.expectedAccumulated}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.actualAccumulated}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-bold text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.differenceAccumulated}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 text-right">
                {total()?.resultAccumulated}
              </td>
              <td class="p-[5px] border border-gray-300 whitespace-nowrap font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-700 rounded-br-lg"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
