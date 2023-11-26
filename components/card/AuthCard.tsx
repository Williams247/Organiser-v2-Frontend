import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export const AuthCard: FC<Props> = ({ title, children, className }) => {
  return (
    <div className={`w-full bg-white rounded-xl py-5 px-5 ${className ?? ""}`}>
      <p className={"text-[30px] font-[600] text-gray-500"}>{title}</p>
      <div className={"mt-3"}>{children}</div>
    </div>
  );
};
