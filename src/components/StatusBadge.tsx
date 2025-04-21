import type { Component } from "solid-js"

type StatusType = "E/O" | "P" | "V/A" | "D/D"

type StatusBadgeProps = {
  status: StatusType
}

const StatusBadge: Component<StatusBadgeProps> = (props) => {
  const getColor = () => {
    switch (props.status) {
      case "E/O":
        return "bg-blue-500"
      case "P":
        return "bg-green-500"
      case "V/A":
        return "bg-red-500"
      case "D/D":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <span
      class={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white rounded-full ${getColor()}`}
    >
      {props.status}
    </span>
  )
}

export default StatusBadge
