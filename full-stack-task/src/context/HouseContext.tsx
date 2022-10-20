import { createContext } from 'react';
import data from '../utils/data.json';
import { houseDatatype } from '../types/houseDataType';
import { contextPropsType } from '../types/contextPropsType';

export const HouseContext = createContext<houseDatatype[]>(data);

export const HouseProvider = ({ children }: contextPropsType) => {
  return <HouseContext.Provider value={data}>{children}</HouseContext.Provider>;
};
