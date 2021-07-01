import React, { useContext } from 'react'
import components from '../provider/components'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/MenuItem.scss'

export type MenuItemCap = 'default' | 'primary';

export interface BaseMenuItemProps {
  cap?: MenuItemCap;
  label?: string;
}

export type MenuItemProps = BaseMenuItemProps & React.LiHTMLAttributes<HTMLLIElement>;

const InternalMenuItem: React.ForwardRefRenderFunction<unknown, MenuItemProps> = (props, ref) => {
  const {
    className,
    label,
    cap
  } = props

  const menuItemRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.MENU_ITEM)
  const menuItemCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${cap}`]: cap
    },
    className)

  const menuItemNode =
    <li {...props} className={menuItemCls} ref={menuItemRef}>{label}</li>

  return <>
    { menuItemNode }
  </>
}

const MenuItem = React.forwardRef<unknown, MenuItemProps>(InternalMenuItem)

MenuItem.displayName = 'menuItem'

MenuItem.defaultProps = {
  cap: 'default'
}

export default MenuItem
