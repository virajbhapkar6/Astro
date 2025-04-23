import type { Component } from "solid-js"

type UserAvatarProps = {
  initials?: string
  color?: string
}

const UserAvatar: Component<UserAvatarProps> = (props) => {
  const { initials = "U", color = "bg-red-500" } = props

  return (
    <div class={`inline-flex items-center justify-center w-8 h-8 rounded-full ${color} text-white text-sm font-medium`}>
      {initials}
    </div>
  )
}

export default UserAvatar