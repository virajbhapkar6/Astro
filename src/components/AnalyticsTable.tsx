import { createSignal, For } from "solid-js"
import { createSolidTable, flexRender, getCoreRowModel } from "@tanstack/solid-table"
import type { ColumnDef } from "@tanstack/solid-table"
import type { AnalyticsData, AnalyticsTableData } from "../types/analytics"

interface AnalyticsTableProps {
  analyticsData: AnalyticsTableData | null;
}

export default function AnalyticsTable(props: AnalyticsTableProps) {
  const [data] = createSignal(props.analyticsData?.assets ?? [])
  const [total] = createSignal(props.analyticsData?.total ?? null)
  const [headers] = createSignal(props.analyticsData?.headers ?? { mainHeader: [], subHeader: [] })

  const columns = [
    {
      accessorKey: "category",
      header: () => headers().subHeader[0].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "closingBalance2023",
      header: () => headers().subHeader[1].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "actualDepreciation2023",
      header: () => headers().subHeader[2].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "percentDepreciation2023",
      header: () => headers().subHeader[3].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "closingBalance2022",
      header: () => headers().subHeader[4].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "actualDepreciation2022",
      header: () => headers().subHeader[5].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "percentDepreciation2022",
      header: () => headers().subHeader[6].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "flux",
      header: () => headers().subHeader[7].text,
      cell: (info) => info.getValue(),
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
    {
      accessorKey: "notes",
      header: () => headers().subHeader[8].text,
      cell: (info) =>
        info.getValue() ? (
          <div class="flex justify-center items-center">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_6609_10523)">
                <path
                  d="M4 9C4 4.58172 7.58172 1 12 1H18C22.4183 1 26 4.58172 26 9V15C26 19.4183 22.4183 23 18 23H4V9Z"
                  fill="#44916F"
                  shape-rendering="crispEdges"
                />
                <rect x="8" y="7.5" width="14" height="1.8" rx="0.9" fill="#F9FAFB" />
                <rect x="8" y="11.1001" width="14" height="1.8" rx="0.9" fill="#F9FAFB" />
                <rect x="8" y="14.7" width="7" height="1.8" rx="0.9" fill="#F9FAFB" />
              </g>
              <defs>
                <filter
                  id="filter0_d_6609_10523"
                  x="0"
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
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6609_10523" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6609_10523" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        ) : null,
      meta: {
        className: () =>
          "p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-medium text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]",
      },
    },
  ] as ColumnDef<AnalyticsData>[]

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div class="rounded-lg shadow-lg">
      <table class="min-w-full divide-y divide-gray-200 w-[1218px] h-[237px] border-separate border-spacing-0 rounded-lg">
        <thead class="bg-gray-50">
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
        <tbody class="bg-white divide-y divide-gray-200 p-2">
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
            <tr class="bg-[#FFFFFF] font-medium">
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] rounded-bl-lg">
                Total
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.closingBalance2023}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.actualDepreciation2023}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.percentDepreciation2023}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.closingBalance2022}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.actualDepreciation2022}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-right font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.percentDepreciation2022}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap text-center font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F]">
                {total()?.flux}
              </td>
              <td class="p-[4px] border border-[#C0C0C0] whitespace-nowrap font-inter font-bold text-[14px] leading-[150%] tracking-[0%] text-[#4F4F4F] rounded-br-lg">
                &nbsp;
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}