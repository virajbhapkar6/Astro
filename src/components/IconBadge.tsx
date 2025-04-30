import type { Component } from "solid-js"
import tickImage from '../assets/tick.png'

interface IconBadgeProps {
  type: "RT" | "SH" | "MC"
  size?: {
    width?: string
    height?: string
  }
  className?: string
  textColor?: string
  backgroundColor?: string
}

const IconBadge: Component<IconBadgeProps> = (props) => {
  const getDefaultSize = () => {
    switch (props.type) {
      case "RT":
        return { width: "52px", height: "22px" }
      case "SH":
        return { width: "54px", height: "22px" }
      case "MC":
        return { width: "58px", height: "22px" }
      default:
        return { width: "50px", height: "20px" }
    }
  }

  const getDefaultColors = () => {
    switch (props.type) {
      case "RT":
        return { text: "white", background: "green" } // Green
      case "SH":
        return { text: "white", background: "green" } // Green
      case "MC":
        return { text: "white", background: "orange" } // Orange
      default:
        return { text:"white", background: "#4CAF50" }
    }
  }

  const size = {
    width: props.size?.width || getDefaultSize().width,
    height: props.size?.height || getDefaultSize().height
  }

  const colors = {
    text: props.textColor || getDefaultColors().text,
    background: props.backgroundColor || getDefaultColors().background
  }

  return (
    <div class={`flex justify-end ${props.className || ""}`}>
      <div 
        class="rounded-lg flex items-center justify-center font-medium text-sm gap-2"
        style={{
          width: size.width,
          height: size.height,
          color: colors.text,
          "background-color": colors.background,
          padding: "0 8px"
        }}
      >
        {props.type}
        {(props.type === "RT" || props.type === "SH" || props.type === "MC") && (
          <img 
            src={tickImage.src} 
            alt="tick" 
            style={{
              width: "11px",
              height: "8.25px"
            }}
          />
        )}
      </div>
    </div>
  )
}

export default IconBadge 