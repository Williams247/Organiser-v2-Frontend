import { useState } from "react"
import { MenuItem } from '@utils/common';
import { FC, useRef } from 'react';
import { CaretDownIcon } from '../../icons';

type OnChangeValuesProps = string | number;
interface Props {
  items: MenuItem[];
  placeholder?: string;
  className?: string;
  label?: string;
  onChange: (key: OnChangeValuesProps, text: OnChangeValuesProps) => void
}

export const FormSelectInput: FC<Props> = ({
  placeholder,
  className,
  label,
  items,
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const dropDownDiv = useRef<HTMLDivElement>(null);

  const handleSelect = (key: string, text: string) => {
    setText(text);
    onChange(key, text)
  }

  return (
    <div
      className={`flex flex-col gap-2 text-sm ${className ?? ''}`}
      ref={dropDownDiv}
      tabIndex={0}

    >
      {label && <label className={"text-[#404040]"}>{label}</label>}

      <div className={"relative"} tabIndex={0}>
        <div
          onBlur={() => setOpen(false)}
          onClick={() => setOpen(true)}
          className={"p-3 border outline-0 border-[#BFBFBF] rounded-md bg-clip-text cursor-pointer flex"}
          tabIndex={0}
        >
          <p className={"flex-grow"}>{!text ? placeholder : text}</p>
          <CaretDownIcon className={"w-3 flex-shrink-0 ml-5"} />
        </div>

        {open && <div
          className={"absolute top-[100%] z-10 left-0 w-full mt-3 bg-white rounded-md drop-shadow-md max-h-[10rem] overflow-y-auto"}
          tabIndex={0}
        >
          {items.map((item, index) => (
            <div
              key={`drop-${index}-${item.key}`}
              className={"hover:bg-[#cac5c5] p-3 cursor-pointer focus:block"}
              onMouseDown={() => handleSelect(item.key, item.text)}
            >
              {item.text}
            </div>
          ))}
        </div>}

      </div>
    </div>
  );
};
