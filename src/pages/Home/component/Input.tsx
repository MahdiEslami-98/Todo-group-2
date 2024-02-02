import React, { LegacyRef } from "react";
const Input  = (props  :React.InputHTMLAttributes<HTMLInputElement> , ref :  LegacyRef<HTMLInputElement>  )  =>{
  return(
    <input {...props}  ref={ref}/>
  )
}
export default React.forwardRef(Input)