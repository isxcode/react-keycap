import React, { useContext, useState } from 'react'
// import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/Upload.scss'
import components from '../provider/components'

export type UploadCap = 'default' | 'primary';

export interface BaseUploadProps {
  cap?: UploadCap;
  hoverAutoFocus?: boolean;
}

export type UploadProps = BaseUploadProps & React.InputHTMLAttributes<HTMLInputElement>;

const InternalUpload: React.ForwardRefRenderFunction<unknown, UploadProps> = (props, ref) => {
  const {
    // className,
    // cap,
    hoverAutoFocus
  } = props

  const [showState, setShowState] = useState('UPLOAD')

  const uploadRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.UPLOAD)
  // const uploadCls = classNames(
  //   prefixCls,
  //   {
  //     [`${prefixCls}-${cap}`]: cap
  //   },
  //   className)

  const uploadNode = () => {
    return showState === 'UPLOAD'
      ? <input  ref={uploadRef} id={prefixCls}
               onMouseOver={() => {
                 if (hoverAutoFocus) {
                   const imageInput: any = document.getElementById(prefixCls)
                   imageInput.focus()
                 }
               }}
               onPaste={(e) => {
                 const reader = new FileReader()
                 reader.readAsDataURL(e.clipboardData.files[0])
                 // reader.onload = function (er) {
                   // setImageData(er.target.result)
                 // }
                 setShowState('IMAGE')
               }}
               onFocus={() => {
               }}
      />
      : <img className={'image-img'} src={''} alt={'image'}/>
  }

  return <>
    {uploadNode}
  </>
}

const Upload = React.forwardRef<unknown, UploadProps>(InternalUpload)

Upload.displayName = 'Upload'

Upload.defaultProps = {
  cap: 'default'
}

export default Upload
