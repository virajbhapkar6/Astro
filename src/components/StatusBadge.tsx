import type { Component } from "solid-js"

type StatusType = "E/O" | "P" | "V/A" | "D/D"

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
      default:
        return "bg-gray-500"
    }
  }

  return (
    <span
      class={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full ${getColor()}`}
    >
      {props.status}
    </span>
  )
}

export default StatusBadge
