import { FormInputProps } from "@utils/common";
import { FC, useState } from "react";

export const FormPasswordInput: FC<FormInputProps> = ({
  placeholder,
  className,
  label,
  title,
  handler,
}) => {
  const {
    register,
    formState: { errors },
  } = handler;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword((val) => !val);

  return (
    <div className={`flex flex-col gap-2 text-sm ${className ?? ""}`}>
      {label && <label className={"text-[#404040]"}>{label}</label>}
      <div className={"p-3 border outline-0 border-[#BFBFBF] rounded-md flex gap-2"}>
        <input
          type={showPassword ? "text" : "password"}
          {...register(title)}
          placeholder={placeholder}
          className={"outline-0 border-0 flex-grow bg-clip-text"}
        />
        <p className={"flex-shrink text-primary font-medium hover:cursor-pointer"} onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </p>
      </div>
      {errors[title] && (
        <p className={"text-red-600"}>{errors[title]?.message as string}</p>
      )}
    </div>
  );
};
