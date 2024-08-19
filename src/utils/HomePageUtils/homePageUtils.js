export const visibleCards = (setFilterdList, CARDS_SAMPLE_DATA) => {
  const availableHeight = window.innerHeight - 348 - 100 - 70;
  const availableCardCount = Math.floor(availableHeight / 90);
  setFilterdList(CARDS_SAMPLE_DATA.slice(0, availableCardCount));
};

export const updateCardElements = (myCardListRef, cardElementsRef) => {
  if (myCardListRef.current) {
    cardElementsRef.current = Array.from(
      myCardListRef.current.querySelectorAll('div')
    );
  }
};

export const scrollCards = (
  direction,
  selectedMyCardId,
  setSelectedMyCardId,
  cardLength
) => {
  if (direction === 'next' && selectedMyCardId < cardLength - 1) {
    setSelectedMyCardId((prev) => prev + 1);
  } else if (direction === 'prev' && selectedMyCardId > 0) {
    setSelectedMyCardId((prev) => prev - 1);
  }
};
