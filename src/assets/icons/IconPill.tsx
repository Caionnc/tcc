import React from 'react';

import { SVGProps } from './types';

const IconPill = ({
  style = {},
  color = 'black',
  size = 24,
  viewBox = '0 0 512 512',
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox={viewBox}
    width={size}
    height={size}
  >
    <rect
      x="-24.43"
      y="167.88"
      width="560.87"
      height="176.25"
      rx="88.12"
      ry="88.12"
      transform="rotate(-45 256 256.002)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <rect
      x="169.41"
      y="156.59"
      width="176"
      height="196"
      rx="32"
      ry="32"
      transform="rotate(45 257.409 254.582)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle cx="256" cy="208" r="16" />
    <circle cx="304" cy="256" r="16" />
    <circle cx="208" cy="256" r="16" />
    <circle cx="256" cy="304" r="16" />
  </svg>
);

export default IconPill;