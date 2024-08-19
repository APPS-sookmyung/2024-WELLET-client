export const visibleCards = (setFilterdList, CARDS_SAMPLE_DATA) => {
  const availableHeight = window.innerHeight - 348 - 100 - 70;
  const availableCardCount = Math.floor(availableHeight / 90);
  setFilterdList(CARDS_SAMPLE_DATA.slice(0, availableCardCount));
};
