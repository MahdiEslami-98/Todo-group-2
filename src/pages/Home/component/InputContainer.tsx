import React from "react";
interface Iprops {
  name: string;
  children: React.ReactNode;
}
const InputContainer: React.FC<Iprops> = ({ name, children }) => {
  return (
    <div className={"flex w-full flex-col gap-3"}>
      <div className={"flex items-center gap-2"}>
        <div className={"h-5 w-2 rounded-sm bg-yellow-body"}></div>
        <label htmlFor="" className={"text-lg"}>
          {name}
        </label>
      </div>
      {children}
    </div>
  );
};
export default InputContainer;
