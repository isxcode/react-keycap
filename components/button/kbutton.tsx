import React, { ButtonHTMLAttributes } from 'react'
// import './style/kbutton.sass'

export enum KButtonType {
  BIG,
  NORMAL,
}

interface KButtonProps extends ButtonHTMLAttributes<any> {

  which?: KButtonType;
}

// function genButtonName(props: any) {
//
//   switch (props.which) {
//     case ButtonType.BIG:
//       return 'keycap-button-big '.concat(props.className)
//     case ButtonType.NORMAL:
//       return 'keycap-button-normal '.concat(props.className)
//   }
//   return props.className
// }

function KButton(props: any, kButtonProps: KButtonProps) {

  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export default KButton

//
// extends React.Component<ButtonProps, any> {
//
//   render(): React.ReactNode {
//     return (
//       <button {...this.props} className={genButtonName(this.props)}>
//         {this.props.children}
//       </button>
//     );
//   }
// }
