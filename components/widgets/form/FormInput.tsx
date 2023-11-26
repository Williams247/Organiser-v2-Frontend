import { FormInputProps } from '@utils/common';
import { FC } from 'react';

export const FormInput: FC<FormInputProps> = ({
  label,
  title,
  placeholder,
  handler,
  className,
  type,
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = handler;

  return (
    <div className={`flex flex-col gap-2 text-sm ${className ?? ''}`}>
      {label && <label className={'text-[#404040]'}>{label}</label>}
      <input
        className={
          'p-2.5 border outline-0 border-[#BFBFBF] rounded-md bg-clip-text'
        }
        type={type ?? 'text'}
        {...register(title)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors[title] && (
        <p className={'text-red-600'}>{errors[title]?.message as string}</p>
      )}
    </div>
  );
};
