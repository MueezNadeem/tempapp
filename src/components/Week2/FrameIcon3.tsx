import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_3_4398)'>
      <path
        d='M17.6308 34.683C27.2083 34.683 34.9723 26.919 34.9723 17.3415C34.9723 7.76406 27.2083 0 17.6308 0C8.05337 0 0.289307 7.76406 0.289307 17.3415C0.289307 26.919 8.05337 34.683 17.6308 34.683Z'
        fill='#8258A4'
      />
      <path
        opacity={0.42}
        d='M17.6308 8.3097L12.2527 13.1813C8.1679 16.7703 4.60044 20.2839 1.18387 23.7759C3.5981 30.1671 8.2649 34.2842 16.6285 34.6615L24.8412 26.4488V18.6241L26.889 16.6841L23.0197 13.1813L17.6308 8.3097Z'
        fill='url(#paint0_linear_3_4398)'
      />
      <path
        d='M17.6308 8.3097L12.2527 13.1813L8.37267 16.6841H9.67678L13.2227 13.4723L17.6308 9.48448L22.0389 13.4723L25.5848 16.6841H26.889L23.0197 13.1813L17.6308 8.3097ZM17.6308 10.1527L14.0202 13.4184L10.4097 16.6841V26.4488H15.2058V18.872H20.045V26.4488H24.8412V16.6841L21.2306 13.4184L17.6308 10.1527ZM16.1543 19.842V26.4488H19.0966V19.842H16.1543Z'
        fill='white'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_3_4398'
        x1={18.7167}
        y1={18.8713}
        x2={3.80816}
        y2={35.1833}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#010101' />
        <stop offset={1} stopColor='#010101' stopOpacity={0} />
      </linearGradient>
      <clipPath id='clip0_3_4398'>
        <rect width={34.6722} height={34.6722} fill='white' transform='translate(0.289307)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
