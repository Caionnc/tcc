import React from 'react';

import { SVGProps } from './types';

const IconInfo = ({
  style = {},
  color = 'black',
  size = 24,
  viewBox = '0 0 24 24',
}: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z"
      fill={color}
    />
    <path
      d="M12 0C5.36794 0 0 5.36705 0 12C0 18.6321 5.36705 24 12 24C18.6321 24 24 18.633 24 12C24 5.36794 18.633 0 12 0ZM12 22.125C6.4042 22.125 1.875 17.5965 1.875 12C1.875 6.4042 6.40345 1.875 12 1.875C17.5958 1.875 22.125 6.40345 22.125 12C22.125 17.5958 17.5965 22.125 12 22.125Z"
      fill={color}
    />
    <rect x="11" y="10" width="2" height="8" rx="1" fill="#4E4E4E" />
  </svg>
);

export default IconInfo;
