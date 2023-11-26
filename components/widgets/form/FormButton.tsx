import { ButtonType } from '@utils/common';
import { FC, PropsWithChildren } from 'react';
import { SpinnerCircular } from 'spinners-react';

interface Props {
  inverse?: boolean;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  contentClassName?: string;
  loading?: boolean;
  bg?: string;
}

export const FormButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  type,
  disabled,
  loading,
  className,
  bg,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return !loading ? (
    <button
      type={type}
      className={`px-4 py-2 rounded text-white  ${className ?? ''} ${
        bg ?? 'bg-gray-500 hover:bg-slate-700'
      }`}
      disabled={disabled}
      onClick={handleClick}
    >
      <div className={'text-[13px]'}>{children}</div>
    </button>
  ) : (
    <div className={'mt-3'}>
      <SpinnerCircular
        thickness={200}
        size={30}
        color={'gray'}
        secondaryColor={'white'}
      />
    </div>
  );
};
