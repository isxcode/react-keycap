import React from 'react'
import './style/Dropdown.scss'

export interface BaseButtonProps {
  label?: string;
}

export type DropdownMenuProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalDropdown: React.ForwardRefRenderFunction<unknown, DropdownMenuProps> = (props) => {
  const {
    children
  } = props

  const Test = () => {
    const array = Array.prototype.slice.call(children, 0)
    return array.map((e:any) => {
      console.log(e.props)
    })
  }

  return <>
    <Test/>
  </>
}

const DropdownMenu = React.forwardRef<unknown, DropdownMenuProps>(InternalDropdown)

DropdownMenu.displayName = 'Dropdown'

DropdownMenu.defaultProps = {}

export default DropdownMenu
