import React, { useContext } from 'react'
import MenuItem from './MenuItem'
import { Button } from '../index'
import './style/Menu.scss'
import { ConfigContext } from '../provider/context'
import components from '../provider/components'
import classNames from 'classnames'

export type MenuCap = 'default' | 'primary';

export interface BaseMenuProps {
  cap?: MenuCap;
}

export type MenuProps = BaseMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalMenu: React.ForwardRefRenderFunction<unknown, MenuProps> = (props, ref) => {
  const {
    cap,
    children,
    className
  } = props

  const menuRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.MENU)
  const menuCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${cap}`]: cap
    },
    className)

  const menuNode = cap === 'default'
    ? <div ref={menuRef}>
        <Button/>
        <ul>
          {children}
        </ul>
      </div>
    : <ul className={menuCls}>
        {children}
      </ul>

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
