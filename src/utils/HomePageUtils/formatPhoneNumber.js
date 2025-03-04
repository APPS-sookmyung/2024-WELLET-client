export const formatPhoneNumber = (value) => {
  if (!value) return '';

  let onlyNumbers = value.replace(/\D/g, '');

  if (onlyNumbers.startsWith('82')) {
    if (onlyNumbers.startsWith('8210')) {
      onlyNumbers = '010' + onlyNumbers.slice(4);
    } else {
      onlyNumbers = '010' + onlyNumbers.slice(2);
    }
  }

  if (onlyNumbers.length <= 3) {
    return onlyNumbers;
  } else if (onlyNumbers.length <= 7) {
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
  } else {
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
  }
};
