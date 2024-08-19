import { useEffect } from 'react';
import { visibleCards, updateCardElements } from './homePageUtils';

export const useVisibleCardsEffect = (setFilterdList, CARDS_SAMPLE_DATA) => {
  useEffect(() => {
    visibleCards(setFilterdList, CARDS_SAMPLE_DATA);
  }, [setFilterdList, CARDS_SAMPLE_DATA]);
};

export const useUpdateCardElementsEffect = (myCardListRef, cardElementsRef) => {
  useEffect(() => {
    const updateElements = () =>
      updateCardElements(myCardListRef, cardElementsRef);

    updateElements();
    window.addEventListener('resize', updateElements);
    return () => {
      window.removeEventListener('resize', updateElements);
    };
  }, [myCardListRef, cardElementsRef]);
};

export const useScrollToCardEffect = (
  myCardListRef,
  cardElementsRef,
  selectedMyCardId
) => {
  useEffect(() => {
    if (myCardListRef.current && cardElementsRef.current.length > 0) {
      const containerWidth = myCardListRef.current.clientWidth;
      const cardWidth = cardElementsRef.current[0].offsetWidth;
      const cardGap = 10;
      const padding = 20;
      const cardCenterPosition =
        (cardWidth + cardGap) * selectedMyCardId + cardWidth / 2;
      const containerCenterPosition = containerWidth / 2 - padding;
      const newScrollPosition = cardCenterPosition - containerCenterPosition;

      myCardListRef.current.scrollTo({
        left: Math.max(
          0,
          Math.min(
            newScrollPosition,
            myCardListRef.current.scrollWidth - containerWidth
          )
        ),
        behavior: 'smooth',
      });
    }
  }, [myCardListRef, cardElementsRef, selectedMyCardId]);
};
