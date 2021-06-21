import React from 'react'
import MenuItem from './MenuItem'
import { Button } from '../index'

export type MenuCap = 'default' | 'primary';

export interface BaseMenuProps {
  cap?: MenuCap;
}

export type MenuProps = BaseMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalMenu: React.ForwardRefRenderFunction<unknown, MenuProps> = (props, ref) => {
  const {
    cap,
    children
  } = props

  const menuRef = (ref as any) || React.createRef<HTMLElement>()

  const menuNode = cap === 'default'
    ? <div ref={menuRef}>
        <Button/>
        <ul>
          {children}
        </ul>
      </div>
    : <div ref={menuRef}>
      <ul>
        {children}
      </ul>
    </div>

  return <>
    {menuNode}
  </>
}

const Menu = React.forwardRef<unknown, MenuProps>(InternalMenu)

Menu.displayName = 'Menu'

Menu.defaultProps = {
  cap: 'default'
}

export default Object.assign(Menu, {
  Item: MenuItem
})
