import { useEffect } from 'react';
import { visibleCards } from './homePageUtils';

export const useVisibleCardsEffect = (setFilterdList, CARDS_SAMPLE_DATA) => {
  useEffect(() => {
    visibleCards(setFilterdList, CARDS_SAMPLE_DATA);
  }, [setFilterdList, CARDS_SAMPLE_DATA]);
};
