import React, { useContext } from 'react'
import components from '../provider/components'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'

export type MenuItemCap = 'default' | 'primary';

export interface BaseMenuItemProps {
  cap?: MenuItemCap;
  label?: string;
  link: string;
}

export type MenuItemProps = BaseMenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalMenuItem: React.ForwardRefRenderFunction<unknown, MenuItemProps> = (props, ref) => {
  const {
    className,
    label,
    link,
    cap
  } = props

  const history = useHistory()

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
     <li className={menuItemCls} ref={menuItemRef} onClick={() => { history.push(link) }}>{label}</li>

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
