import React from 'react'

export type MenuIconProps = {
  size?: number
  color?: string
}

export const MenuIcon = (props: MenuIconProps) => (
  <svg
    width={props.size || 25}
    height={props.size || 28}
    viewBox="0 0 25 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16667 7H20.8333V9.33333H4.16667V7ZM8.33333 12.8333H20.8333V15.1667H8.33333V12.8333ZM13.5417 18.6667H20.8333V21H13.5417V18.6667Z"
      fill={props.color || '#423a57'}
    />
  </svg>
)
