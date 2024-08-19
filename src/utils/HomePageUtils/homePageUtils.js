export const visibleCards = (setFilterdList, sampleData) => {
  const availableHeight = window.innerHeight - 348 - 100 - 70;
  const availableCardCount = Math.floor(availableHeight / 90);
  setFilterdList(sampleData.slice(0, availableCardCount));
};
