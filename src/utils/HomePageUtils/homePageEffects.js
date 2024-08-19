import { useEffect } from 'react';
import { visibleCards } from './homePageUtils';

export const useVisibleCardsEffect = (setFilterdList, sampleData) => {
  useEffect(() => {
    visibleCards(setFilterdList, sampleData);
  }, [setFilterdList, sampleData]);
};
