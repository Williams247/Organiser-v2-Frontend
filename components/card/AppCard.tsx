import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const AppCard: FC<Props> = ({ className, children }) => {
  return (
    <div className={`w-full bg-white py-5 px-5 rounded-3xl ${className ?? ''}`}>
      {children}
    </div>
  );
};
