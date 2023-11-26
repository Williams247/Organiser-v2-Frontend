import { Navigation } from '../components/navigation';
import { PropsWithChildren, FC } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className={'bg-[#e2dfdf]'}>
        <div className={'container'}>{children}</div>
      </div>
    </>
  );
};
