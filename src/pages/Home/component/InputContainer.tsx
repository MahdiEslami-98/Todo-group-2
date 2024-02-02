import React from "react";
interface Iprops {
  name : string,
  children : React.ReactNode
}
const InputContainer : React.FC<Iprops> = ({name , children}) =>{
  return(
      <div className={'flex flex-col gap-3 w-full'}>
        <div className={'flex gap-2 items-center'}>
          <div className={"h-5 w-2 bg-yellow-body rounded-sm"}></div>
          <label htmlFor="" className={'text-grey-textdark text-lg '}>{name}</label>
        </div>
        {children}
      </div>

  )
}
export default InputContainer