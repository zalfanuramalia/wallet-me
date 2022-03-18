export const Button = ({ children, block, padding, variant = 'info', ...rest }) => {
    return (
      < div className={block ? `d-grid ${padding ? padding : ' my-2'}` : `d-inline-block ${padding ? padding : ''}`} >
        <button className={`btn py-2 radius btn-${variant} `} {...rest}>{children}</button>
      </div >
  
    )
  }
  
  export default Button