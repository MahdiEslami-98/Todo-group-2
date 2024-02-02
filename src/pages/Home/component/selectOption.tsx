import { HTMLAttributes, forwardRef } from "react";

const SelectOption = (
  props: HTMLAttributes<HTMLSelectElement>,
  ref: React.LegacyRef<HTMLSelectElement>,
) => {
  return (
    <select {...props} ref={ref}>
      <option selected className={"bg-brown-home/70"} value="وحشت/هیجانی">
        وحشت/هیجانی
      </option>
      <option className={"bg-brown-home/70"} value="کمدی">
        کمدی
      </option>
      <option className={"bg-brown-home/70"} value="اجتماعی">
        اجتماعی
      </option>
      <option className={"bg-brown-home/70"} value="درام">
        درام
      </option>
    </select>
  );
};

export default forwardRef(SelectOption);
