import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBulletList,
  BtnNumberedList,
} from "react-simple-wysiwyg";

type ChangeEventProps = React.FormEvent<HTMLInputElement>;

interface Props {
  className?: string;
  handler: UseFormReturn;
  title: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const FormWiziwig: FC<Props> = ({
  className,
  handler,
  title,
  onChange,
  placeholder,
}) => {
  const {
    formState: { errors },
    watch,
  } = handler;

  const value = watch(title) as string;

  const handleGetValue = (event: ChangeEventProps) => {
    const wiziwigValue = event.target as HTMLInputElement;
    onChange(wiziwigValue.value);
  };

  return (
    <>
      <div className={className ?? ""}>
        <EditorProvider>
          <Editor
            value={value}
            onChange={(event) => handleGetValue(event)}
            style={{ fontSize: "0.875rem" }}
            placeholder={placeholder}
          >
            <Toolbar>
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnBulletList />
              <BtnNumberedList />
            </Toolbar>
          </Editor>
        </EditorProvider>
        {errors[title] && (
          <p className={"text-red-600"}>{errors[title]?.message as string}</p>
        )}
      </div>
    </>
  );
};
