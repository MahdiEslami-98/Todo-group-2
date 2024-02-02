import React, { TextareaHTMLAttributes } from "react";

export const Textarea : React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) =>{
  return(
    <textarea {...props}></textarea>
  )
}