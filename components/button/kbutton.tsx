import React from 'react'
import './kbutton.sass'
import { getClassName } from '../common/common'

// 自定义某些属性的值
export type KButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger'
export type KButtonSize = 'large' | 'middle' | 'small'

// 自定义属性
export interface CustomButtonProps {
  label?: string
  which?: KButtonType
  size?: KButtonSize
}

// 结合网页基础属性
export type KButtonProps = CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

// 类组件函数
class KButton extends React.Component<KButtonProps> {

  // 简单按钮模型
  simpleButton() {

    let className = getClassName('button', [this.props.which], this.props.className)

    if (this.props.children != null) {
      return <button {...this.props} className={className}>
        {this.props.children}
      </button>
    } else {
      return <button {...this.props} className={className}>
        {this.props.label}
      </button>
    }
  }

  // 渲染组件
  render() {
    return this.simpleButton()
  }
}

// 导出组件
export default KButton