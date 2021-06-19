import React from 'react'
import './style/Dropdown.scss'

export interface BaseDropdownItemProps {
  label?: string;
}

export type DropdownItemProps = BaseDropdownItemProps & React.InputHTMLAttributes<HTMLInputElement>;

const InternalDropdown: React.ForwardRefRenderFunction<unknown, DropdownItemProps> = () => {
  return <>
  </>
}

const DropdownItem = React.forwardRef<unknown, DropdownItemProps>(InternalDropdown)

DropdownItem.displayName = 'Dropdown'

DropdownItem.defaultProps = {
}

export default DropdownItem
