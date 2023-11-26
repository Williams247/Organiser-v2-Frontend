import { createContext, useContext } from 'react';
import { GeneralContextProps } from "./type"

export const GeneralStateContext = createContext({} as GeneralContextProps);

export const UseGeneralStateContext = () => useContext(GeneralStateContext);
