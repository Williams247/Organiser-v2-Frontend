import { FC, PropsWithChildren, useState } from 'react';
import { GeneralStateContext } from './context';

export const GeneralStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [openCreateActivity, setCreactAciviy] = useState(false);
  const handleOpenCloseMenu = (val: boolean) => setCreactAciviy(val);
  return (
    <>
      <GeneralStateContext.Provider
        value={{ openCreateActivity, handleOpenCloseMenu }}
      >
        {children}
      </GeneralStateContext.Provider>
    </>
  );
};
