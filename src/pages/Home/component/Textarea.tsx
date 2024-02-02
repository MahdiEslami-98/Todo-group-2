import React, { TextareaHTMLAttributes, forwardRef } from "react";

const Textarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: React.LegacyRef<HTMLTextAreaElement>,
) => {
  return <textarea {...props} ref={ref}></textarea>;
};

export default forwardRef(Textarea);
