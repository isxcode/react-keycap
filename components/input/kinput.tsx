import React from 'react'
import './kinput.sass'
import { getClassName } from '../common/common'

export type KInputType = 'default' | 'line' | 'border'

export interface CustomInputProps {
  label?: string
  which?: KInputType
}

export type KInputProps = CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>

class KInput extends React.Component<KInputProps> {

  className = getClassName('input', [this.props.which], this.props.className)

  hasLabelInput() {

    return <div>
      <span>{this.props.label}</span>
      <input {...this.props} className={this.className}>{this.props.children}</input>
    </div>
  }

  hasNoLabelInput() {
    return <input {...this.props} className={this.className}>{this.props.children}</input>
  }

  render() {
    if (this.props.label != null) {
      return this.hasLabelInput()
    } else {
      return this.hasNoLabelInput()
    }
  }
}

export default KInput