import { HTMLAttributes } from "react";

export  const  SelectOption = ( props : HTMLAttributes<HTMLSelectElement>) =>{
  return(
    <select {...props}>
      <option className={'bg-slate-700'} value="وحشت/هیجانی" selected={true}>وحشت/هیجانی</option>
      <option className={'bg-slate-700'} value="کمدی" selected={true}>کمدی</option>
      <option className={'bg-slate-700'} value="اجتماعی" selected={true}>اجتماعی</option>
      <option className={'bg-slate-700'} value="درام" selected={true}>درام</option>
    </select>
  )
}