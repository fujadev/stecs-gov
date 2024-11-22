import * as React from 'react';

type WarningProps = {
  color: string;
};

const Warning: React.FC<WarningProps> = ({ color }) => (
  <svg fill='none' viewBox='0 0 24 24'>
    <path
      d='M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm1-5C6.47 2 2 6.5 2 12A10 10 0 1 0 12 2Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z'
      fill={color}
    />
  </svg>
);

export default Warning;
