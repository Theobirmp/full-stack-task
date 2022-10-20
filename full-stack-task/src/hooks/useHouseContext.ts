import { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';

export const useHouseContext = () => {
  const data = useContext(HouseContext);
  if (!data) throw Error('cant access context outside context provider');
  return data;
};
