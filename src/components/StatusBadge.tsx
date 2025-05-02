import type { Component } from "solid-js"

type StatusType = "E/O" | "P" | "V/A" | "D/D" | "P/D"

type StatusBadgeProps = {
  status: StatusType
}

const StatusBadge: Component<StatusBadgeProps> = (props) => {
  const getColor = () => {
    switch (props.status) {
      case "E/O":
        return "bg-[#6FA6FF]"
      case "P":
        return "bg-[#10B981]"
      case "V/A":
        return "bg-[#D85151]"
      case "D/D":
        return "bg-[#14B8A6]"
      case "P/D":
        return "bg-[#14B8A6]"
      default:
        return "bg-gray-500"
    }
  }

  const getDescription = () => {
    switch (props.status) {
      case "V/A":
        return "Valuation or Allocation"
      case "P/D":
        return "Presentation and Disclosure"
      default:
        return "text"
    }
  }

  return (
    <div class="relative group">
      <span
        class={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full ${getColor()}`}
      >
        {props.status}
      </span>
      <div class="absolute invisible group-hover:visible bg-purple-80 text-black text-sm rounded-md py-2 px-3 min-w-[160px] text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 whitespace-nowrap">
        {getDescription()}
        <div class="absolute w-2 h-2 bg-purple-80 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1"></div>
      </div>
    </div>
  )
}

export default StatusBadge
