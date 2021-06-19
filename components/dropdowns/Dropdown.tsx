import React from 'react'
import './style/Dropdown.scss'

export type DropdownCap = 'default' | 'primary';

export interface BaseDropdownProps {
  cap?: DropdownCap;
  label?: string
}

export type DropdownProps = BaseDropdownProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalDropdown: React.ForwardRefRenderFunction<unknown, DropdownProps> = (props, ref) => {
  const {
    children
  } = props

  const dropdownRef = (ref as any) || React.createRef<HTMLElement>()

  const dropdownNode = () => {
    const array = Array.prototype.slice.call(children, 0)
    array.map((e:any) => { return <li key={e.key} ref={dropdownRef} onClick={e.props.onClick}>e.props.label</li> })
  }

  return <>
   {dropdownNode}
  </>
}

const Dropdown = React.forwardRef<unknown, DropdownProps>(InternalDropdown)

Dropdown.displayName = 'Dropdown'

Dropdown.defaultProps = {
  cap: 'default'
}

export default Object.assign(Dropdown, {
  // Item: any,
  // Menu: any
})
