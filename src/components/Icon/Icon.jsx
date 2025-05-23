import React from 'react';
import iconSvg from '../../assets/icons/icon.svg';

export default function Icon({ id, fill, ...props }) {
  return (
    <svg {...props}>
      <use href={`${iconSvg}#${id}`} fill={fill} />
    </svg>
  );
}
